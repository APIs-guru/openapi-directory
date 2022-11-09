import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetPatchBaselineXAmzTargetEnum {
    AmazonSsmGetPatchBaseline = "AmazonSSM.GetPatchBaseline"
}


export class GetPatchBaselineHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetPatchBaselineXAmzTargetEnum;
}


export class GetPatchBaselineRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetPatchBaselineHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetPatchBaselineRequest;
}


export class GetPatchBaselineResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  doesNotExistException?: any;

  @Metadata()
  getPatchBaselineResult?: shared.GetPatchBaselineResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidResourceId?: any;

  @Metadata()
  statusCode: number;
}
