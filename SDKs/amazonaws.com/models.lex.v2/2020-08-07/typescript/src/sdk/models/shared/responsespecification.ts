import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageGroup } from "./messagegroup";



// ResponseSpecification
/** 
 * Specifies a list of message groups that Amazon Lex uses to respond the user input.
**/
export class ResponseSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowInterrupt" })
  allowInterrupt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=messageGroups", elemType: MessageGroup })
  messageGroups: MessageGroup[];
}
