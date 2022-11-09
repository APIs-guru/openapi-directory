import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JourneyLimits
/** 
 * Specifies limits on the messages that a journey can send and the number of times participants can enter a journey.
**/
export class JourneyLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=DailyCap" })
  dailyCap?: number;

  @Metadata({ data: "json, name=EndpointReentryCap" })
  endpointReentryCap?: number;

  @Metadata({ data: "json, name=EndpointReentryInterval" })
  endpointReentryInterval?: string;

  @Metadata({ data: "json, name=MessagesPerSecond" })
  messagesPerSecond?: number;
}
