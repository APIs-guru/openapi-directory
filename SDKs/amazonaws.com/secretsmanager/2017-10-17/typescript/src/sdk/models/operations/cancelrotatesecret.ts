import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CancelRotateSecretXAmzTargetEnum {
    SecretsmanagerCancelRotateSecret = "secretsmanager.CancelRotateSecret"
}


export class CancelRotateSecretHeaders extends SpeakeasyBase {
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
  xAmzTarget: CancelRotateSecretXAmzTargetEnum;
}


export class CancelRotateSecretRequest extends SpeakeasyBase {
  @Metadata()
  headers: CancelRotateSecretHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CancelRotateSecretRequest;
}


export class CancelRotateSecretResponse extends SpeakeasyBase {
  @Metadata()
  cancelRotateSecretResponse?: shared.CancelRotateSecretResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceError?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
