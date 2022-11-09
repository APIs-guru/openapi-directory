import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteActivationXAmzTargetEnum {
    AmazonSsmDeleteActivation = "AmazonSSM.DeleteActivation"
}


export class DeleteActivationHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteActivationXAmzTargetEnum;
}


export class DeleteActivationRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteActivationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteActivationRequest;
}


export class DeleteActivationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteActivationResult?: Map<string, any>;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidActivation?: any;

  @Metadata()
  invalidActivationId?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyUpdates?: any;
}
