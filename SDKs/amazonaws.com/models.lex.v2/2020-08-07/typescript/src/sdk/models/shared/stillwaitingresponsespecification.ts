import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MessageGroup } from "./messagegroup";


// StillWaitingResponseSpecification
/** 
 * Defines the messages that Amazon Lex sends to a user to remind them that the bot is waiting for a response.
**/
export class StillWaitingResponseSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowInterrupt" })
  allowInterrupt?: boolean;

  @Metadata({ data: "json, name=frequencyInSeconds" })
  frequencyInSeconds: number;

  @Metadata({ data: "json, name=messageGroups", elemType: shared.MessageGroup })
  messageGroups: MessageGroup[];

  @Metadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds: number;
}
