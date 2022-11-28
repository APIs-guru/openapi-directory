import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutDefaultEncryptionConfigurationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum {
    SitewiseDefaultEncryption = "SITEWISE_DEFAULT_ENCRYPTION",
    KmsBasedEncryption = "KMS_BASED_ENCRYPTION"
}


export class PutDefaultEncryptionConfigurationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptionType" })
  encryptionType: PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;
}


export class PutDefaultEncryptionConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutDefaultEncryptionConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutDefaultEncryptionConfigurationRequestBody;
}


export class PutDefaultEncryptionConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictingOperationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  putDefaultEncryptionConfigurationResponse?: shared.PutDefaultEncryptionConfigurationResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
