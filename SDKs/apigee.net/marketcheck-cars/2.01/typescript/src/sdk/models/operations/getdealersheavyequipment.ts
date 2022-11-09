import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDealersHeavyEquipmentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: shared.NonDefaultCountryEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dealer_type" })
  dealerType?: shared.DealerTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=facets" })
  facets?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=inventory_url" })
  inventoryUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=latitude" })
  latitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=listing_count_range" })
  listingCountRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=range_facets" })
  rangeFacets?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rows" })
  rows?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: shared.SortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class GetDealersHeavyEquipmentRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDealersHeavyEquipmentQueryParams;
}


export class GetDealersHeavyEquipmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dealersResponse?: shared.DealersResponse;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
