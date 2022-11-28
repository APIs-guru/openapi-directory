import { SpeakeasyBase } from "../../../internal/utils";
import { UsageByAccount } from "./usagebyaccount";
/**
 * Provides quota and aggregated usage data for an Amazon Macie account.
**/
export declare class UsageRecord extends SpeakeasyBase {
    accountId?: string;
    freeTrialStartDate?: Date;
    usage?: UsageByAccount[];
}
