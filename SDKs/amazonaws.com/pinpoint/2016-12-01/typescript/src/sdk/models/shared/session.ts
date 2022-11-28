import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Session
/** 
 * Provides information about a session.
**/
export class Session extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=StartTimestamp" })
  startTimestamp: string;

  @SpeakeasyMetadata({ data: "json, name=StopTimestamp" })
  stopTimestamp?: string;
}
