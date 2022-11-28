import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageGroup } from "./messagegroup";



// PromptSpecification
/** 
 * Specifies a list of message groups that Amazon Lex sends to a user to elicit a response.
**/
export class PromptSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowInterrupt" })
  allowInterrupt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxRetries" })
  maxRetries: number;

  @SpeakeasyMetadata({ data: "json, name=messageGroups", elemType: MessageGroup })
  messageGroups: MessageGroup[];
}
