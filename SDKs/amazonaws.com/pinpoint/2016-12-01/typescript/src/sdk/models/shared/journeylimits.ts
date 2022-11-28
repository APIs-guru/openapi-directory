import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JourneyLimits
/** 
 * Specifies limits on the messages that a journey can send and the number of times participants can enter a journey.
**/
export class JourneyLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DailyCap" })
  dailyCap?: number;

  @SpeakeasyMetadata({ data: "json, name=EndpointReentryCap" })
  endpointReentryCap?: number;

  @SpeakeasyMetadata({ data: "json, name=EndpointReentryInterval" })
  endpointReentryInterval?: string;

  @SpeakeasyMetadata({ data: "json, name=MessagesPerSecond" })
  messagesPerSecond?: number;
}
