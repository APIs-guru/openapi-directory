import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { UsageTypeEnum } from "./usagetypeenum";



// UsageTotal
/** 
 * Provides aggregated data for an Amazon Macie usage metric. The value for the metric reports estimated usage data for an account for the preceding 30 days or the current calendar month to date, depending on the time period (timeRange) specified in the request.
**/
export class UsageTotal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=estimatedCost" })
  estimatedCost?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UsageTypeEnum;
}
