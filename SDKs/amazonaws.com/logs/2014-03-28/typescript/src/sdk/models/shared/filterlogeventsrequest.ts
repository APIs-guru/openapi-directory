import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FilterLogEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: number;

  @Metadata({ data: "json, name=filterPattern" })
  filterPattern?: string;

  @Metadata({ data: "json, name=interleaved" })
  interleaved?: boolean;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @Metadata({ data: "json, name=logStreamNamePrefix" })
  logStreamNamePrefix?: string;

  @Metadata({ data: "json, name=logStreamNames" })
  logStreamNames?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: number;
}
