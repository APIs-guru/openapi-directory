import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionGroup } from "./dimensiongroup";
import { DimensionGroup } from "./dimensiongroup";
import { ServiceTypeEnum } from "./servicetypeenum";


export class DescribeDimensionKeysRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime: Date;

  @Metadata({ data: "json, name=Filter" })
  filter?: Map<string, string>;

  @Metadata({ data: "json, name=GroupBy" })
  groupBy: DimensionGroup;

  @Metadata({ data: "json, name=Identifier" })
  identifier: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=Metric" })
  metric: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PartitionBy" })
  partitionBy?: DimensionGroup;

  @Metadata({ data: "json, name=PeriodInSeconds" })
  periodInSeconds?: number;

  @Metadata({ data: "json, name=ServiceType" })
  serviceType: ServiceTypeEnum;

  @Metadata({ data: "json, name=StartTime" })
  startTime: Date;
}
