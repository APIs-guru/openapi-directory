import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChatChannel
/** 
 * The AWS Chatbot chat channel used for collaboration during an incident.
**/
export class ChatChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chatbotSns" })
  chatbotSns?: string[];

  @SpeakeasyMetadata({ data: "json, name=empty" })
  empty?: Map<string, any>;
}
