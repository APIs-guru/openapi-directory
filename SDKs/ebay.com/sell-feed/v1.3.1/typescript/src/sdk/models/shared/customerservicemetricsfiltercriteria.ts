import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomerServiceMetricsFilterCriteria
/** 
 * A complex data type that filters data for report creation. See CustomerServiceMetricsFilterCriteria for fields and descriptions.
**/
export class CustomerServiceMetricsFilterCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerServiceMetricType" })
  customerServiceMetricType?: string;

  @Metadata({ data: "json, name=evaluationMarketplaceId" })
  evaluationMarketplaceId?: string;

  @Metadata({ data: "json, name=listingCategories" })
  listingCategories?: string[];

  @Metadata({ data: "json, name=shippingRegions" })
  shippingRegions?: string[];
}
