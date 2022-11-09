import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateOAuthClientHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class CreateOAuthClientRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateOAuthClientHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateOAuthClientRequest;
}


export class CreateOAuthClientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  oAuthClient?: shared.OAuthClient;

  @Metadata()
  statusCode: number;

  @Metadata()
  createOAuthClient400ApplicationJsonOneOf?: any;
}
