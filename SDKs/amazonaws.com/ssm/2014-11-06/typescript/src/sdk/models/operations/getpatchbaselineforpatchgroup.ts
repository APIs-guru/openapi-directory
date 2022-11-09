import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetPatchBaselineForPatchGroupXAmzTargetEnum {
    AmazonSsmGetPatchBaselineForPatchGroup = "AmazonSSM.GetPatchBaselineForPatchGroup"
}


export class GetPatchBaselineForPatchGroupHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetPatchBaselineForPatchGroupXAmzTargetEnum;
}


export class GetPatchBaselineForPatchGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetPatchBaselineForPatchGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetPatchBaselineForPatchGroupRequest;
}


export class GetPatchBaselineForPatchGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPatchBaselineForPatchGroupResult?: shared.GetPatchBaselineForPatchGroupResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
