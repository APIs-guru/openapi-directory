import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EventSummary } from "./eventsummary";
export declare class ListTimelineEventsOutput extends SpeakeasyBase {
    eventSummaries: EventSummary[];
    nextToken?: string;
}
