import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeRange } from "./timerange";
import { TimeRange } from "./timerange";


export class ListAttacksRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: TimeRange;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceArns" })
  resourceArns?: string[];

  @Metadata({ data: "json, name=StartTime" })
  startTime?: TimeRange;
}
