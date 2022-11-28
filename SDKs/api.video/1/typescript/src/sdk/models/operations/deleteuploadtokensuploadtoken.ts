import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteUploadTokensUploadTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uploadToken" })
  uploadToken: string;
}


export class DeleteUploadTokensUploadTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteUploadTokensUploadTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUploadTokensUploadTokenPathParams;

  @SpeakeasyMetadata()
  security: DeleteUploadTokensUploadTokenSecurity;
}


export class DeleteUploadTokensUploadTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;
}
