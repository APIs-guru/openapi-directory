import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateSecretXAmzTargetEnum {
    SecretsmanagerCreateSecret = "secretsmanager.CreateSecret"
}


export class CreateSecretHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateSecretXAmzTargetEnum;
}


export class CreateSecretRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateSecretHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateSecretRequest;
}


export class CreateSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createSecretResponse?: shared.CreateSecretResponse;

  @Metadata()
  encryptionFailure?: any;

  @Metadata()
  internalServiceError?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  malformedPolicyDocumentException?: any;

  @Metadata()
  preconditionNotMetException?: any;

  @Metadata()
  resourceExistsException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
