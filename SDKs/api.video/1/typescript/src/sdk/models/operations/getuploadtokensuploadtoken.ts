import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUploadTokensUploadTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uploadToken" })
  uploadToken: string;
}


export class GetUploadTokensUploadTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetUploadTokensUploadTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUploadTokensUploadTokenPathParams;

  @Metadata()
  security: GetUploadTokensUploadTokenSecurity;
}


export class GetUploadTokensUploadTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  uploadToken?: shared.UploadToken;
}
