import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeRange } from "./timerange";



export class ListEngagementsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IncidentId" })
  incidentId?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TimeRangeValue" })
  timeRangeValue?: TimeRange;
}
