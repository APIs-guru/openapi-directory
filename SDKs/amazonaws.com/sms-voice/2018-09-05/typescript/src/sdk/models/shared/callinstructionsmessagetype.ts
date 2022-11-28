import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CallInstructionsMessageType
/** 
 * An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup.
**/
export class CallInstructionsMessageType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;
}
