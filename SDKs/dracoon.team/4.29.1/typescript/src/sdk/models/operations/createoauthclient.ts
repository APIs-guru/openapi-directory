import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateOAuthClientHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class CreateOAuthClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateOAuthClientHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateOAuthClientRequest;
}


export class CreateOAuthClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  oAuthClient?: shared.OAuthClient;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createOAuthClient400ApplicationJsonOneOf?: any;
}
