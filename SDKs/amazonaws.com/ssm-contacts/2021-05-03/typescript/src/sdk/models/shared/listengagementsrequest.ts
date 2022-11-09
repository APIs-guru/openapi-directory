import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeRange } from "./timerange";


export class ListEngagementsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=IncidentId" })
  incidentId?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TimeRangeValue" })
  timeRangeValue?: TimeRange;
}
