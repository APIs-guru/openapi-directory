import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateOAuthClientPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class UpdateOAuthClientHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateOAuthClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOAuthClientPathParams;

  @SpeakeasyMetadata()
  headers: UpdateOAuthClientHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateOAuthClientRequest;
}


export class UpdateOAuthClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  oAuthClient?: shared.OAuthClient;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateOAuthClient400ApplicationJsonOneOf?: any;
}
