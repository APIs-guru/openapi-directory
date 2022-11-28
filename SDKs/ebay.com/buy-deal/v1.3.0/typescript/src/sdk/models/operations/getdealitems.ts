import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDealItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category_ids" })
  categoryIds?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=commissionable" })
  commissionable?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=delivery_country" })
  deliveryCountry?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetDealItemsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class GetDealItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetDealItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDealItemsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDealItemsHeaders;

  @SpeakeasyMetadata()
  security: GetDealItemsSecurity;
}


export class GetDealItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dealItemSearchResponse?: shared.DealItemSearchResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
