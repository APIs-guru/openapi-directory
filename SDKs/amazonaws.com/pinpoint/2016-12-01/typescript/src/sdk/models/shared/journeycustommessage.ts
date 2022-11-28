import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JourneyCustomMessage
/** 
 * Specifies the message content for a custom channel message that's sent to participants in a journey.
**/
export class JourneyCustomMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data?: string;
}
