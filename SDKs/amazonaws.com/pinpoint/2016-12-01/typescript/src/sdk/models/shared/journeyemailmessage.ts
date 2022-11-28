import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JourneyEmailMessage
/** 
 * Specifies the "From" address for an email message that's sent to participants in a journey.
**/
export class JourneyEmailMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FromAddress" })
  fromAddress?: string;
}
