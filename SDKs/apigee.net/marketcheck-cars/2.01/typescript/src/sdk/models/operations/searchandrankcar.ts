import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchAndRankCarQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=append_api_key" })
  appendApiKey?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=base_exterior_color" })
  baseExteriorColor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=base_interior_color" })
  baseInteriorColor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=body_subtype" })
  bodySubtype?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=body_type" })
  bodyType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=car_type" })
  carType?: shared.CarCarTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=carfax_1_owner" })
  carfax1Owner?: shared.Carfax1OwnerEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=carfax_clean_title" })
  carfaxCleanTitle?: shared.CarfaxCleanTitleEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=city_mpg_range" })
  cityMpgRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: shared.CarCountryEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cylinders" })
  cylinders?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dealer_type" })
  dealerType?: shared.DealerTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dedup" })
  dedup?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dom_180_range" })
  dom180Range?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dom_active_range" })
  domActiveRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dom_range" })
  domRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=doors" })
  doors?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=drivetrain" })
  drivetrain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=engine" })
  engine?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=engine_aspiration" })
  engineAspiration?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=engine_block" })
  engineBlock?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=engine_size" })
  engineSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude_certified" })
  excludeCertified?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exterior_color" })
  exteriorColor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=facet_sort" })
  facetSort?: shared.FacetSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=facets" })
  facets?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=finance_down_payment" })
  financeDownPayment?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=finance_down_payment_per" })
  financeDownPaymentPer?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=finance_emp" })
  financeEmp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=finance_loan_apr" })
  financeLoanApr?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=finance_loan_term" })
  financeLoanTerm?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=first_seen_at_mc_days" })
  firstSeenAtMcDays?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=first_seen_at_mc_range" })
  firstSeenAtMcRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=first_seen_at_source_days" })
  firstSeenAtSourceDays?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=first_seen_at_source_range" })
  firstSeenAtSourceRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=first_seen_days" })
  firstSeenDays?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=first_seen_range" })
  firstSeenRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fuel_type" })
  fuelType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=highway_mpg_range" })
  highwayMpgRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_finance" })
  includeFinance?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_lease" })
  includeLease?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_non_vin_listings" })
  includeNonVinListings?: boolean;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=lease_down_payment" })
  leaseDownPayment?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lease_emp" })
  leaseEmp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lease_term" })
  leaseTerm?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=make" })
  make?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=match" })
  match?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=miles_range" })
  milesRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=msa_code" })
  msaCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=msrp_range" })
  msrpRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nodedup" })
  nodedup?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=owned" })
  owned?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=photo_links" })
  photoLinks?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=plot" })
  plot?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=price_range" })
  priceRange?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=stats" })
  stats?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stock_no" })
  stockNo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=taxonomy_vins" })
  taxonomyVins?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=transmission" })
  transmission?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=trim" })
  trim?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=trim_o" })
  trimO?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=trim_r" })
  trimR?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vehicle_type" })
  vehicleType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vin" })
  vin?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vins" })
  vins?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ymmt" })
  ymmt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class SearchAndRankCarRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchAndRankCarQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CarRankRequest;
}


export class SearchAndRankCarResponse extends SpeakeasyBase {
  @Metadata()
  carRankResponse?: shared.CarRankResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
