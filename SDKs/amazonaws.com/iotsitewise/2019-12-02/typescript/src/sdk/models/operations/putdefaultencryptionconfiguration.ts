import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutDefaultEncryptionConfigurationHeaders extends SpeakeasyBase {
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
}

export enum PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum {
    SitewiseDefaultEncryption = "SITEWISE_DEFAULT_ENCRYPTION"
,    KmsBasedEncryption = "KMS_BASED_ENCRYPTION"
}


export class PutDefaultEncryptionConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=encryptionType" })
  encryptionType: PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum;

  @Metadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;
}


export class PutDefaultEncryptionConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutDefaultEncryptionConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutDefaultEncryptionConfigurationRequestBody;
}


export class PutDefaultEncryptionConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  conflictingOperationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  putDefaultEncryptionConfigurationResponse?: shared.PutDefaultEncryptionConfigurationResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
