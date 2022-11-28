import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JourneyPushMessage
/** 
 * Specifies the message configuration for a push notification that's sent to participants in a journey.
**/
export class JourneyPushMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TimeToLive" })
  timeToLive?: string;
}
