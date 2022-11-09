import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UsageRecord } from "./usagerecord";
import { TimeRangeEnum } from "./timerangeenum";


export class GetUsageStatisticsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=records", elemType: shared.UsageRecord })
  records?: UsageRecord[];

  @Metadata({ data: "json, name=timeRange" })
  timeRange?: TimeRangeEnum;
}
