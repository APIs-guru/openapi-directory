import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The AWS Chatbot chat channel used for collaboration during an incident.
**/
export declare class ChatChannel extends SpeakeasyBase {
    chatbotSns?: string[];
    empty?: Map<string, any>;
}
