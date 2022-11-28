import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsageRecord } from "./usagerecord";
import { TimeRangeEnum } from "./timerangeenum";



export class GetUsageStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=records", elemType: UsageRecord })
  records?: UsageRecord[];

  @SpeakeasyMetadata({ data: "json, name=timeRange" })
  timeRange?: TimeRangeEnum;
}
