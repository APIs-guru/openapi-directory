import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetEventsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class GetEventsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEventsQueryParams;

  @SpeakeasyMetadata()
  headers: GetEventsHeaders;

  @SpeakeasyMetadata()
  security: GetEventsSecurity;
}


export class GetEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  eventSearchResponse?: shared.EventSearchResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
