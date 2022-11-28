import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimelineEvent } from "./timelineevent";



export class GetTimelineEventOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event: TimelineEvent;
}
