import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetEventsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class GetEventsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetEventsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEventsQueryParams;

  @Metadata()
  headers: GetEventsHeaders;

  @Metadata()
  security: GetEventsSecurity;
}


export class GetEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eventSearchResponse?: shared.EventSearchResponse;

  @Metadata()
  statusCode: number;
}
