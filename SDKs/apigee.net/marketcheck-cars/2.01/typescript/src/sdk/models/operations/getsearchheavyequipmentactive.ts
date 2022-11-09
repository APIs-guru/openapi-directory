import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSearchHeavyEquipmentActiveQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=body_type" })
  bodyType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dealer_id" })
  dealerId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dealer_name" })
  dealerName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=drivetrain" })
  drivetrain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=engine" })
  engine?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exterior_color" })
  exteriorColor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=facet_sort" })
  facetSort?: shared.FacetSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=facets" })
  facets?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=first_seen_days" })
  firstSeenDays?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=first_seen_range" })
  firstSeenRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fuel_type" })
  fuelType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hours_used_range" })
  hoursUsedRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interior_color" })
  interiorColor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=inventory_type" })
  inventoryType?: shared.InventoryTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_seen_days" })
  lastSeenDays?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_seen_range" })
  lastSeenRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=latitude" })
  latitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=make" })
  make?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=miles_range" })
  milesRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=msa_code" })
  msaCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=msrp_range" })
  msrpRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=price_range" })
  priceRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=range_facets" })
  rangeFacets?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rows" })
  rows?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search_text" })
  searchText?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: shared.SortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stats" })
  stats?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stock_no" })
  stockNo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sub_category" })
  subCategory?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=transmission" })
  transmission?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=trim" })
  trim?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vin" })
  vin?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class GetSearchHeavyEquipmentActiveRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSearchHeavyEquipmentActiveQueryParams;
}


export class GetSearchHeavyEquipmentActiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  heavyEquipmentsSearchResponse?: shared.HeavyEquipmentsSearchResponse;

  @Metadata()
  statusCode: number;
}
