import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MessageGroup } from "./messagegroup";


// PromptSpecification
/** 
 * Specifies a list of message groups that Amazon Lex sends to a user to elicit a response.
**/
export class PromptSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowInterrupt" })
  allowInterrupt?: boolean;

  @Metadata({ data: "json, name=maxRetries" })
  maxRetries: number;

  @Metadata({ data: "json, name=messageGroups", elemType: shared.MessageGroup })
  messageGroups: MessageGroup[];
}
