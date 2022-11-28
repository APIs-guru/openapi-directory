import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSummary } from "./eventsummary";



export class ListTimelineEventsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventSummaries", elemType: EventSummary })
  eventSummaries: EventSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
