import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchAndRankCarQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=append_api_key" })
  appendApiKey?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base_exterior_color" })
  baseExteriorColor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base_interior_color" })
  baseInteriorColor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_subtype" })
  bodySubtype?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_type" })
  bodyType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=car_type" })
  carType?: shared.CarCarTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=carfax_1_owner" })
  carfax1Owner?: shared.Carfax1OwnerEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=carfax_clean_title" })
  carfaxCleanTitle?: shared.CarfaxCleanTitleEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city_mpg_range" })
  cityMpgRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: shared.CarCountryEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cylinders" })
  cylinders?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealer_type" })
  dealerType?: shared.DealerTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dedup" })
  dedup?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dom_180_range" })
  dom180Range?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dom_active_range" })
  domActiveRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dom_range" })
  domRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doors" })
  doors?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=drivetrain" })
  drivetrain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_aspiration" })
  engineAspiration?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_block" })
  engineBlock?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_size" })
  engineSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_certified" })
  excludeCertified?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exterior_color" })
  exteriorColor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet_sort" })
  facetSort?: shared.FacetSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facets" })
  facets?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_down_payment" })
  financeDownPayment?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_down_payment_per" })
  financeDownPaymentPer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_emp" })
  financeEmp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_loan_apr" })
  financeLoanApr?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_loan_term" })
  financeLoanTerm?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_at_mc_days" })
  firstSeenAtMcDays?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_at_mc_range" })
  firstSeenAtMcRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_at_source_days" })
  firstSeenAtSourceDays?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_at_source_range" })
  firstSeenAtSourceRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_days" })
  firstSeenDays?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_range" })
  firstSeenRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fuel_type" })
  fuelType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=highway_mpg_range" })
  highwayMpgRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_finance" })
  includeFinance?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_lease" })
  includeLease?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_non_vin_listings" })
  includeNonVinListings?: boolean;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lease_down_payment" })
  leaseDownPayment?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lease_emp" })
  leaseEmp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lease_term" })
  leaseTerm?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" })
  make?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=match" })
  match?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=miles_range" })
  milesRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msa_code" })
  msaCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msrp_range" })
  msrpRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nodedup" })
  nodedup?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=owned" })
  owned?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photo_links" })
  photoLinks?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=plot" })
  plot?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=price_range" })
  priceRange?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stats" })
  stats?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stock_no" })
  stockNo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taxonomy_vins" })
  taxonomyVins?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transmission" })
  transmission?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim" })
  trim?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim_o" })
  trimO?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim_r" })
  trimR?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicle_type" })
  vehicleType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vin" })
  vin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vins" })
  vins?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ymmt" })
  ymmt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class SearchAndRankCarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchAndRankCarQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CarRankRequest;
}


export class SearchAndRankCarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  carRankResponse?: shared.CarRankResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
