import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateOAuthClientPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class UpdateOAuthClientHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateOAuthClientRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOAuthClientPathParams;

  @Metadata()
  headers: UpdateOAuthClientHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateOAuthClientRequest;
}


export class UpdateOAuthClientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  oAuthClient?: shared.OAuthClient;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOAuthClient400ApplicationJsonOneOf?: any;
}
