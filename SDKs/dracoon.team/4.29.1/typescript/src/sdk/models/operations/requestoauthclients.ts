import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestOAuthClientsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class RequestOAuthClientsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestOAuthClientsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RequestOAuthClientsQueryParams;

  @Metadata()
  headers: RequestOAuthClientsHeaders;
}


export class RequestOAuthClientsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata({ elemType: shared.OAuthClient })
  oAuthClients?: shared.OAuthClient[];

  @Metadata()
  statusCode: number;
}
