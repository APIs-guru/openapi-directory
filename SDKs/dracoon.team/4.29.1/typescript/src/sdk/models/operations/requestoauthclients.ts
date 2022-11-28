import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestOAuthClientsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class RequestOAuthClientsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestOAuthClientsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RequestOAuthClientsQueryParams;

  @SpeakeasyMetadata()
  headers: RequestOAuthClientsHeaders;
}


export class RequestOAuthClientsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata({ elemType: shared.OAuthClient })
  oAuthClients?: shared.OAuthClient[];

  @SpeakeasyMetadata()
  statusCode: number;
}
