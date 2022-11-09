import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPresignUrlSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class GetPresignUrlRequest extends SpeakeasyBase {
  @Metadata()
  security: GetPresignUrlSecurity;
}


export class GetPresignUrlUploadPresignFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=policy" })
  policy: string;

  @Metadata({ data: "json, name=x-amz-algorithm" })
  xAmzAlgorithm: string;

  @Metadata({ data: "json, name=x-amz-credential" })
  xAmzCredential: string;

  @Metadata({ data: "json, name=x-amz-date" })
  xAmzDate: string;

  @Metadata({ data: "json, name=x-amz-signature" })
  xAmzSignature: string;
}

export enum GetPresignUrlUploadPresignMethodEnum {
    Post = "post"
}


export class GetPresignUrlUploadPresign extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields: GetPresignUrlUploadPresignFields;

  @Metadata({ data: "json, name=headers" })
  headers: Map<string, any>;

  @Metadata({ data: "json, name=method" })
  method?: GetPresignUrlUploadPresignMethodEnum;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class GetPresignUrlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata()
  uploadPresign?: GetPresignUrlUploadPresign;
}
