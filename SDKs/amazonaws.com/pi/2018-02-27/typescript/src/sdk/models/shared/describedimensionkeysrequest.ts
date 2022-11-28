import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionGroup } from "./dimensiongroup";
import { ServiceTypeEnum } from "./servicetypeenum";



export class DescribeDimensionKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=GroupBy" })
  groupBy: DimensionGroup;

  @SpeakeasyMetadata({ data: "json, name=Identifier" })
  identifier: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=Metric" })
  metric: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PartitionBy" })
  partitionBy?: DimensionGroup;

  @SpeakeasyMetadata({ data: "json, name=PeriodInSeconds" })
  periodInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=ServiceType" })
  serviceType: ServiceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime: Date;
}
