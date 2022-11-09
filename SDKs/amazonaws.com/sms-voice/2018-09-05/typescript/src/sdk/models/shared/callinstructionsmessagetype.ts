import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CallInstructionsMessageType
/** 
 * An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup.
**/
export class CallInstructionsMessageType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Text" })
  text?: string;
}
