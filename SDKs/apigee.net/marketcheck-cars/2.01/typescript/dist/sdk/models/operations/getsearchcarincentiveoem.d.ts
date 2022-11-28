import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSearchCarIncentiveOemOfferTypeEnum {
    Lease = "lease",
    Finance = "finance",
    Cash = "cash"
}
export declare class GetSearchCarIncentiveOemQueryParams extends SpeakeasyBase {
    acquisitionFee?: string;
    apiKey?: string;
    apr?: string;
    cashbackAmount?: string;
    cashbackTargetGroup?: string;
    city?: string;
    country?: shared.CountryEnum;
    dealerContribution?: string;
    dispositionFee?: string;
    downPayment?: string;
    dueAtSigning?: string;
    duration?: string;
    facetSort?: shared.FacetSortEnum;
    facets?: string;
    firstSeenRange?: string;
    grossCapitalisedCost?: string;
    lastSeenRange?: string;
    latitude?: number;
    leaseEndPurchaseOption?: string;
    longitude?: number;
    make?: string;
    mileageCharge?: string;
    mileageChargeLimit?: string;
    model?: string;
    monthly?: string;
    monthlyPerThousand?: string;
    msrp?: string;
    netCapitalisedCost?: string;
    offerType?: GetSearchCarIncentiveOemOfferTypeEnum;
    radius?: number;
    rangeFacets?: string;
    rows?: number;
    searchText?: string;
    securityDeposit?: string;
    sortBy?: string;
    sortOrder?: shared.SortOrderEnum;
    start?: number;
    state?: string;
    stats?: string;
    totalMonthlyPayment?: string;
    trim?: string;
    year?: string;
    zip?: string;
}
export declare class GetSearchCarIncentiveOemRequest extends SpeakeasyBase {
    queryParams: GetSearchCarIncentiveOemQueryParams;
}
export declare class GetSearchCarIncentiveOemResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    searchResponse?: shared.SearchResponse;
    statusCode: number;
}
