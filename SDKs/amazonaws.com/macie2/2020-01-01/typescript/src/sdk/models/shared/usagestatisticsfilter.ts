import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UsageStatisticsFilterComparatorEnum } from "./usagestatisticsfiltercomparatorenum";
import { UsageStatisticsFilterKeyEnum } from "./usagestatisticsfilterkeyenum";


// UsageStatisticsFilter
/** 
 * Specifies a condition for filtering the results of a query for quota and usage data for one or more Amazon Macie accounts.
**/
export class UsageStatisticsFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=comparator" })
  comparator?: UsageStatisticsFilterComparatorEnum;

  @Metadata({ data: "json, name=key" })
  key?: UsageStatisticsFilterKeyEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
