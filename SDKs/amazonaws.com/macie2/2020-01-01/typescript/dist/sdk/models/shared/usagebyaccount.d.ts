import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { ServiceLimit } from "./servicelimit";
import { UsageTypeEnum } from "./usagetypeenum";
/**
 * Provides data for a specific usage metric and the corresponding quota for an Amazon Macie account.
**/
export declare class UsageByAccount extends SpeakeasyBase {
    currency?: CurrencyEnum;
    estimatedCost?: string;
    serviceLimit?: ServiceLimit;
    type?: UsageTypeEnum;
}
