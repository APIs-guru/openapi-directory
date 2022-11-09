import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestOAuthClientPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class RequestOAuthClientHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestOAuthClientRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestOAuthClientPathParams;

  @Metadata()
  headers: RequestOAuthClientHeaders;
}


export class RequestOAuthClientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  oAuthClient?: shared.OAuthClient;

  @Metadata()
  statusCode: number;
}
