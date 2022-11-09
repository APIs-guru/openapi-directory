import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDealItemsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=category_ids" })
  categoryIds?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=commissionable" })
  commissionable?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=delivery_country" })
  deliveryCountry?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetDealItemsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class GetDealItemsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetDealItemsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDealItemsQueryParams;

  @Metadata()
  headers: GetDealItemsHeaders;

  @Metadata()
  security: GetDealItemsSecurity;
}


export class GetDealItemsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dealItemSearchResponse?: shared.DealItemSearchResponse;

  @Metadata()
  statusCode: number;
}
