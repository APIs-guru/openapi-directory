import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category_ids" })
  categoryIds?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=delivery_country" })
  deliveryCountry?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event_ids" })
  eventIds: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetEventItemsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class GetEventItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetEventItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEventItemsQueryParams;

  @SpeakeasyMetadata()
  headers: GetEventItemsHeaders;

  @SpeakeasyMetadata()
  security: GetEventItemsSecurity;
}


export class GetEventItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  eventItemSearchResponse?: shared.EventItemSearchResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
