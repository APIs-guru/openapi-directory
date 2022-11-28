import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A complex data type that filters data for report creation. See CustomerServiceMetricsFilterCriteria for fields and descriptions.
**/
export declare class CustomerServiceMetricsFilterCriteria extends SpeakeasyBase {
    customerServiceMetricType?: string;
    evaluationMarketplaceId?: string;
    listingCategories?: string[];
    shippingRegions?: string[];
}
