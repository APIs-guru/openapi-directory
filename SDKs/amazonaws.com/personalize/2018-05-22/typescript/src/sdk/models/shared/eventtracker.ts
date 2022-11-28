import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventTracker
/** 
 * Provides information about an event tracker.
**/
export class EventTracker extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=datasetGroupArn" })
  datasetGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=eventTrackerArn" })
  eventTrackerArn?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
