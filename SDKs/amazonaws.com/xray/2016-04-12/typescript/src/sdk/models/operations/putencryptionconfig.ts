import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutEncryptionConfigHeaders extends SpeakeasyBase {
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

export enum PutEncryptionConfigRequestBodyTypeEnum {
    None = "NONE"
,    Kms = "KMS"
}


export class PutEncryptionConfigRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;

  @Metadata({ data: "json, name=Type" })
  type: PutEncryptionConfigRequestBodyTypeEnum;
}


export class PutEncryptionConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutEncryptionConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutEncryptionConfigRequestBody;
}


export class PutEncryptionConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  putEncryptionConfigResult?: shared.PutEncryptionConfigResult;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttledException?: any;
}
