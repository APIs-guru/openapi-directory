import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEventTrackerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventTrackerArn" })
  eventTrackerArn?: string;

  @Metadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
