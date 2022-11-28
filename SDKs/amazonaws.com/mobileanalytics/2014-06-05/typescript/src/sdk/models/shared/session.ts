import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Session
/** 
 * Describes the session. Session information is required on ALL events.
**/
export class Session extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=startTimestamp" })
  startTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=stopTimestamp" })
  stopTimestamp?: string;
}
