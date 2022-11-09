import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventItemsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=category_ids" })
  categoryIds?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=delivery_country" })
  deliveryCountry?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=event_ids" })
  eventIds: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetEventItemsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class GetEventItemsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetEventItemsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEventItemsQueryParams;

  @Metadata()
  headers: GetEventItemsHeaders;

  @Metadata()
  security: GetEventItemsSecurity;
}


export class GetEventItemsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eventItemSearchResponse?: shared.EventItemSearchResponse;

  @Metadata()
  statusCode: number;
}
