import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventTracker } from "./eventtracker";


export class DescribeEventTrackerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventTracker" })
  eventTracker?: EventTracker;
}
