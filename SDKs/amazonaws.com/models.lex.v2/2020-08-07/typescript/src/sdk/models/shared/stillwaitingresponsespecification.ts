import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageGroup } from "./messagegroup";



// StillWaitingResponseSpecification
/** 
 * Defines the messages that Amazon Lex sends to a user to remind them that the bot is waiting for a response.
**/
export class StillWaitingResponseSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowInterrupt" })
  allowInterrupt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=frequencyInSeconds" })
  frequencyInSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=messageGroups", elemType: MessageGroup })
  messageGroups: MessageGroup[];

  @SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds: number;
}
