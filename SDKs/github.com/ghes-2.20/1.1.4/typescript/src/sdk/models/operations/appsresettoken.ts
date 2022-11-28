import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsResetTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class AppsResetTokenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;
}


export class AppsResetTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsResetTokenPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AppsResetTokenRequestBody;
}


export class AppsResetTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authorization?: shared.Authorization;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
