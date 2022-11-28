import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPresignUrlSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class GetPresignUrlUploadPresignFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy: string;

  @SpeakeasyMetadata({ data: "json, name=x-amz-algorithm" })
  xAmzAlgorithm: string;

  @SpeakeasyMetadata({ data: "json, name=x-amz-credential" })
  xAmzCredential: string;

  @SpeakeasyMetadata({ data: "json, name=x-amz-date" })
  xAmzDate: string;

  @SpeakeasyMetadata({ data: "json, name=x-amz-signature" })
  xAmzSignature: string;
}

export enum GetPresignUrlUploadPresignMethodEnum {
    Post = "post"
}


export class GetPresignUrlUploadPresign extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields: GetPresignUrlUploadPresignFields;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: GetPresignUrlUploadPresignMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class GetPresignUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetPresignUrlSecurity;
}


export class GetPresignUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata()
  uploadPresign?: GetPresignUrlUploadPresign;
}
