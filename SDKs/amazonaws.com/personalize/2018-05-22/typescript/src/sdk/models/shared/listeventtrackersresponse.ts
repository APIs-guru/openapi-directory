import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventTrackerSummary } from "./eventtrackersummary";



export class ListEventTrackersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventTrackers", elemType: EventTrackerSummary })
  eventTrackers?: EventTrackerSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
