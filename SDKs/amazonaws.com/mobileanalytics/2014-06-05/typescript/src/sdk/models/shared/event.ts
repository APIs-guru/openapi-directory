import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Session } from "./session";


// Event
/** 
 * A JSON object representing a batch of unique event occurrences in your app.
**/
export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=eventType" })
  eventType: string;

  @Metadata({ data: "json, name=metrics" })
  metrics?: Map<string, number>;

  @Metadata({ data: "json, name=session" })
  session?: Session;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
