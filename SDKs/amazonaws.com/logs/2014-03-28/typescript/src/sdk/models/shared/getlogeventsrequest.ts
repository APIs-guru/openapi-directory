import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLogEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: number;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @Metadata({ data: "json, name=logStreamName" })
  logStreamName: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=startFromHead" })
  startFromHead?: boolean;

  @Metadata({ data: "json, name=startTime" })
  startTime?: number;
}
