import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteEventTrackerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventTrackerArn" })
  eventTrackerArn: string;
}
