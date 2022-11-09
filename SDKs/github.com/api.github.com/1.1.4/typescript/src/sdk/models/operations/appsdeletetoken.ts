import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsDeleteTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class AppsDeleteTokenRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;
}


export class AppsDeleteTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsDeleteTokenPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: AppsDeleteTokenRequestBody;
}


export class AppsDeleteTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationError?: shared.ValidationError;
}
