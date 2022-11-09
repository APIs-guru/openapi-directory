import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttackStatisticsDataItem } from "./attackstatisticsdataitem";
import { TimeRange } from "./timerange";


export class DescribeAttackStatisticsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataItems", elemType: shared.AttackStatisticsDataItem })
  dataItems: AttackStatisticsDataItem[];

  @Metadata({ data: "json, name=TimeRange" })
  timeRange: TimeRange;
}
