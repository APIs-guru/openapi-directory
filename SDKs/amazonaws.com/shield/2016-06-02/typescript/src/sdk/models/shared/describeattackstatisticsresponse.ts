import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttackStatisticsDataItem } from "./attackstatisticsdataitem";
import { TimeRange } from "./timerange";



export class DescribeAttackStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataItems", elemType: AttackStatisticsDataItem })
  dataItems: AttackStatisticsDataItem[];

  @SpeakeasyMetadata({ data: "json, name=TimeRange" })
  timeRange: TimeRange;
}
