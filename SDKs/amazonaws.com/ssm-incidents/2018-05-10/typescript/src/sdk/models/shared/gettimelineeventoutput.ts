import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimelineEvent } from "./timelineevent";


export class GetTimelineEventOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=event" })
  event: TimelineEvent;
}
