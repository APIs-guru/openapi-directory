import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventTrackerSummary } from "./eventtrackersummary";


export class ListEventTrackersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventTrackers", elemType: shared.EventTrackerSummary })
  eventTrackers?: EventTrackerSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
