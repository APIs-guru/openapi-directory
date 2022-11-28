import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUploadTokensUploadTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uploadToken" })
  uploadToken: string;
}


export class GetUploadTokensUploadTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetUploadTokensUploadTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUploadTokensUploadTokenPathParams;

  @SpeakeasyMetadata()
  security: GetUploadTokensUploadTokenSecurity;
}


export class GetUploadTokensUploadTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  uploadToken?: shared.UploadToken;
}
