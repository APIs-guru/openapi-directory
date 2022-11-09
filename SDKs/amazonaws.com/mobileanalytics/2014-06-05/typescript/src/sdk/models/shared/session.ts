import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Session
/** 
 * Describes the session. Session information is required on ALL events.
**/
export class Session extends SpeakeasyBase {
  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=startTimestamp" })
  startTimestamp?: string;

  @Metadata({ data: "json, name=stopTimestamp" })
  stopTimestamp?: string;
}
