import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsCheckTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class AppsCheckTokenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;
}


export class AppsCheckTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsCheckTokenPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AppsCheckTokenRequestBody;
}


export class AppsCheckTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authorization?: shared.Authorization;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
