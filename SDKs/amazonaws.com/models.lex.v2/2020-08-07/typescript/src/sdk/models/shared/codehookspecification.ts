import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LambdaCodeHook } from "./lambdacodehook";


// CodeHookSpecification
/** 
 * Contains information about code hooks that Amazon Lex calls during a conversation.
**/
export class CodeHookSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=lambdaCodeHook" })
  lambdaCodeHook: LambdaCodeHook;
}
