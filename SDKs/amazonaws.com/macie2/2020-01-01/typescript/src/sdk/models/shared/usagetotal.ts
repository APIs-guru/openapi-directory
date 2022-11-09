import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CurrencyEnum } from "./currencyenum";
import { UsageTypeEnum } from "./usagetypeenum";


// UsageTotal
/** 
 * Provides aggregated data for an Amazon Macie usage metric. The value for the metric reports estimated usage data for an account for the preceding 30 days or the current calendar month to date, depending on the time period (timeRange) specified in the request.
**/
export class UsageTotal extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=estimatedCost" })
  estimatedCost?: string;

  @Metadata({ data: "json, name=type" })
  type?: UsageTypeEnum;
}
