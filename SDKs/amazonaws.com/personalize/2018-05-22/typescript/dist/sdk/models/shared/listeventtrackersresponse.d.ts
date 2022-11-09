import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EventTrackerSummary } from "./eventtrackersummary";
export declare class ListEventTrackersResponse extends SpeakeasyBase {
    eventTrackers?: EventTrackerSummary[];
    nextToken?: string;
}
