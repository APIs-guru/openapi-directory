import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSearchRvActiveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=class" })
  class?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealer_id" })
  dealerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealer_name" })
  dealerName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exterior_color" })
  exteriorColor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet_sort" })
  facetSort?: shared.FacetSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facets" })
  facets?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_days" })
  firstSeenDays?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_range" })
  firstSeenRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fuel_type" })
  fuelType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interior_color" })
  interiorColor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inventory_type" })
  inventoryType?: shared.InventoryTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_seen_days" })
  lastSeenDays?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_seen_range" })
  lastSeenRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" })
  make?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=miles_range" })
  milesRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model_o" })
  modelO?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msa_code" })
  msaCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msrp_range" })
  msrpRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=price_range" })
  priceRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=range_facets" })
  rangeFacets?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rows" })
  rows?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_text" })
  searchText?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: shared.SortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stats" })
  stats?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stock_no" })
  stockNo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transmission" })
  transmission?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vin" })
  vin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class GetSearchRvActiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSearchRvActiveQueryParams;
}


export class GetSearchRvActiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  rvSearchResponse?: shared.RvSearchResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
