import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsDeleteTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class AppsDeleteTokenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;
}


export class AppsDeleteTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsDeleteTokenPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AppsDeleteTokenRequestBody;
}


export class AppsDeleteTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
