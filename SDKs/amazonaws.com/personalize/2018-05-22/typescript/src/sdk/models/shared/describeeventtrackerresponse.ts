import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventTracker } from "./eventtracker";



export class DescribeEventTrackerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventTracker" })
  eventTracker?: EventTracker;
}
