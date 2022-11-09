import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeregisterPatchBaselineForPatchGroupXAmzTargetEnum {
    AmazonSsmDeregisterPatchBaselineForPatchGroup = "AmazonSSM.DeregisterPatchBaselineForPatchGroup"
}


export class DeregisterPatchBaselineForPatchGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeregisterPatchBaselineForPatchGroupXAmzTargetEnum;
}


export class DeregisterPatchBaselineForPatchGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeregisterPatchBaselineForPatchGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeregisterPatchBaselineForPatchGroupRequest;
}


export class DeregisterPatchBaselineForPatchGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deregisterPatchBaselineForPatchGroupResult?: shared.DeregisterPatchBaselineForPatchGroupResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidResourceId?: any;

  @Metadata()
  statusCode: number;
}
