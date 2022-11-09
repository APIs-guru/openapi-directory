import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetSearchCarIncentiveOemOfferTypeEnum {
    Lease = "lease"
,    Finance = "finance"
,    Cash = "cash"
}


export class GetSearchCarIncentiveOemQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=acquisition_fee" })
  acquisitionFee?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=apr" })
  apr?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cashback_amount" })
  cashbackAmount?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cashback_target_group" })
  cashbackTargetGroup?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: shared.CountryEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dealer_contribution" })
  dealerContribution?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disposition_fee" })
  dispositionFee?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=down_payment" })
  downPayment?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=due_at_signing" })
  dueAtSigning?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=duration" })
  duration?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=facet_sort" })
  facetSort?: shared.FacetSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=facets" })
  facets?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=first_seen_range" })
  firstSeenRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=gross_capitalised_cost" })
  grossCapitalisedCost?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_seen_range" })
  lastSeenRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=latitude" })
  latitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lease_end_purchase_option" })
  leaseEndPurchaseOption?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=make" })
  make?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mileage_charge" })
  mileageCharge?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mileage_charge_limit" })
  mileageChargeLimit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=monthly" })
  monthly?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=monthly_per_thousand" })
  monthlyPerThousand?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=msrp" })
  msrp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=net_capitalised_cost" })
  netCapitalisedCost?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offer_type" })
  offerType?: GetSearchCarIncentiveOemOfferTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=range_facets" })
  rangeFacets?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rows" })
  rows?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search_text" })
  searchText?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=security_deposit" })
  securityDeposit?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=total_monthly_payment" })
  totalMonthlyPayment?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=trim" })
  trim?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class GetSearchCarIncentiveOemRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSearchCarIncentiveOemQueryParams;
}


export class GetSearchCarIncentiveOemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  searchResponse?: shared.SearchResponse;

  @Metadata()
  statusCode: number;
}
