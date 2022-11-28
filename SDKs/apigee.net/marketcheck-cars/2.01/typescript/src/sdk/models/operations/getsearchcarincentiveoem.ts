import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSearchCarIncentiveOemOfferTypeEnum {
    Lease = "lease",
    Finance = "finance",
    Cash = "cash"
}


export class GetSearchCarIncentiveOemQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=acquisition_fee" })
  acquisitionFee?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apr" })
  apr?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cashback_amount" })
  cashbackAmount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cashback_target_group" })
  cashbackTargetGroup?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: shared.CountryEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealer_contribution" })
  dealerContribution?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disposition_fee" })
  dispositionFee?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=down_payment" })
  downPayment?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=due_at_signing" })
  dueAtSigning?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet_sort" })
  facetSort?: shared.FacetSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facets" })
  facets?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_range" })
  firstSeenRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gross_capitalised_cost" })
  grossCapitalisedCost?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_seen_range" })
  lastSeenRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lease_end_purchase_option" })
  leaseEndPurchaseOption?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" })
  make?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mileage_charge" })
  mileageCharge?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mileage_charge_limit" })
  mileageChargeLimit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=monthly" })
  monthly?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=monthly_per_thousand" })
  monthlyPerThousand?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msrp" })
  msrp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=net_capitalised_cost" })
  netCapitalisedCost?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offer_type" })
  offerType?: GetSearchCarIncentiveOemOfferTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=range_facets" })
  rangeFacets?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rows" })
  rows?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_text" })
  searchText?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=security_deposit" })
  securityDeposit?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=total_monthly_payment" })
  totalMonthlyPayment?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim" })
  trim?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class GetSearchCarIncentiveOemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSearchCarIncentiveOemQueryParams;
}


export class GetSearchCarIncentiveOemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  searchResponse?: shared.SearchResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
