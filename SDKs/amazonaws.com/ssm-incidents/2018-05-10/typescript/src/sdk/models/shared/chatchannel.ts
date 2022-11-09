import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChatChannel
/** 
 * The AWS Chatbot chat channel used for collaboration during an incident.
**/
export class ChatChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=chatbotSns" })
  chatbotSns?: string[];

  @Metadata({ data: "json, name=empty" })
  empty?: Map<string, any>;
}
