import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventSummary } from "./eventsummary";


export class ListTimelineEventsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventSummaries", elemType: shared.EventSummary })
  eventSummaries: EventSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
