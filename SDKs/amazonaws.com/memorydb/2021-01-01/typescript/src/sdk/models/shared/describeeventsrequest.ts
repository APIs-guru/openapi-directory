import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";



export class DescribeEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceName" })
  sourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: SourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
