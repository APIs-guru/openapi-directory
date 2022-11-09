import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeletePatchBaselineXAmzTargetEnum {
    AmazonSsmDeletePatchBaseline = "AmazonSSM.DeletePatchBaseline"
}


export class DeletePatchBaselineHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeletePatchBaselineXAmzTargetEnum;
}


export class DeletePatchBaselineRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeletePatchBaselineHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeletePatchBaselineRequest;
}


export class DeletePatchBaselineResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deletePatchBaselineResult?: shared.DeletePatchBaselineResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  statusCode: number;
}
