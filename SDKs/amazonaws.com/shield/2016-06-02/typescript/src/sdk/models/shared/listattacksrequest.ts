import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeRange } from "./timerange";



export class ListAttacksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: TimeRange;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceArns" })
  resourceArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: TimeRange;
}
