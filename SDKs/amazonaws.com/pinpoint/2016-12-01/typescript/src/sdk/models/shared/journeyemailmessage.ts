import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JourneyEmailMessage
/** 
 * Specifies the "From" address for an email message that's sent to participants in a journey.
**/
export class JourneyEmailMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=FromAddress" })
  fromAddress?: string;
}
