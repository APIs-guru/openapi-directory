import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { UsageTypeEnum } from "./usagetypeenum";
/**
 * Provides aggregated data for an Amazon Macie usage metric. The value for the metric reports estimated usage data for an account for the preceding 30 days or the current calendar month to date, depending on the time period (timeRange) specified in the request.
**/
export declare class UsageTotal extends SpeakeasyBase {
    currency?: CurrencyEnum;
    estimatedCost?: string;
    type?: UsageTypeEnum;
}
