import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JourneyPushMessage
/** 
 * Specifies the message configuration for a push notification that's sent to participants in a journey.
**/
export class JourneyPushMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=TimeToLive" })
  timeToLive?: string;
}
