import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventTrackerSummary
/** 
 * Provides a summary of the properties of an event tracker. For a complete listing, call the <a>DescribeEventTracker</a> API.
**/
export class EventTrackerSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=eventTrackerArn" })
  eventTrackerArn?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
