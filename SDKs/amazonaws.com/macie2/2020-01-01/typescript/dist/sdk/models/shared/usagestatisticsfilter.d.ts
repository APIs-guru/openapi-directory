import { SpeakeasyBase } from "../../../internal/utils";
import { UsageStatisticsFilterComparatorEnum } from "./usagestatisticsfiltercomparatorenum";
import { UsageStatisticsFilterKeyEnum } from "./usagestatisticsfilterkeyenum";
/**
 * Specifies a condition for filtering the results of a query for quota and usage data for one or more Amazon Macie accounts.
**/
export declare class UsageStatisticsFilter extends SpeakeasyBase {
    comparator?: UsageStatisticsFilterComparatorEnum;
    key?: UsageStatisticsFilterKeyEnum;
    values?: string[];
}
