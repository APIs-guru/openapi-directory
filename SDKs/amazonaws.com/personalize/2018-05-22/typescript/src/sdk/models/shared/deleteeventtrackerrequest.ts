import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteEventTrackerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventTrackerArn" })
  eventTrackerArn: string;
}
