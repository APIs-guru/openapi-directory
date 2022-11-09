import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MessageGroup } from "./messagegroup";


// ResponseSpecification
/** 
 * Specifies a list of message groups that Amazon Lex uses to respond the user input.
**/
export class ResponseSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowInterrupt" })
  allowInterrupt?: boolean;

  @Metadata({ data: "json, name=messageGroups", elemType: shared.MessageGroup })
  messageGroups: MessageGroup[];
}
