import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDealersHeavyEquipmentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: shared.NonDefaultCountryEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealer_type" })
  dealerType?: shared.DealerTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facets" })
  facets?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inventory_url" })
  inventoryUrl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=listing_count_range" })
  listingCountRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=range_facets" })
  rangeFacets?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rows" })
  rows?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: shared.SortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class GetDealersHeavyEquipmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDealersHeavyEquipmentQueryParams;
}


export class GetDealersHeavyEquipmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dealersResponse?: shared.DealersResponse;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
