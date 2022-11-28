import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsageStatisticsFilterComparatorEnum } from "./usagestatisticsfiltercomparatorenum";
import { UsageStatisticsFilterKeyEnum } from "./usagestatisticsfilterkeyenum";



// UsageStatisticsFilter
/** 
 * Specifies a condition for filtering the results of a query for quota and usage data for one or more Amazon Macie accounts.
**/
export class UsageStatisticsFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comparator" })
  comparator?: UsageStatisticsFilterComparatorEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: UsageStatisticsFilterKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
