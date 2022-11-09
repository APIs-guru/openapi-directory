import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteUploadTokensUploadTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uploadToken" })
  uploadToken: string;
}


export class DeleteUploadTokensUploadTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteUploadTokensUploadTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUploadTokensUploadTokenPathParams;

  @Metadata()
  security: DeleteUploadTokensUploadTokenSecurity;
}


export class DeleteUploadTokensUploadTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  notFound?: shared.NotFound;
}
