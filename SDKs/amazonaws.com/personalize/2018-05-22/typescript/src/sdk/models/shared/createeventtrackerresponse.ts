import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEventTrackerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventTrackerArn" })
  eventTrackerArn?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
