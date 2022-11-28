import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomerServiceMetricsFilterCriteria
/** 
 * A complex data type that filters data for report creation. See CustomerServiceMetricsFilterCriteria for fields and descriptions.
**/
export class CustomerServiceMetricsFilterCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerServiceMetricType" })
  customerServiceMetricType?: string;

  @SpeakeasyMetadata({ data: "json, name=evaluationMarketplaceId" })
  evaluationMarketplaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=listingCategories" })
  listingCategories?: string[];

  @SpeakeasyMetadata({ data: "json, name=shippingRegions" })
  shippingRegions?: string[];
}
