import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Session } from "./session";



// Event
/** 
 * A JSON object representing a batch of unique event occurrences in your app.
**/
export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType: string;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=session" })
  session?: Session;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
