import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LambdaCodeHook } from "./lambdacodehook";



// CodeHookSpecification
/** 
 * Contains information about code hooks that Amazon Lex calls during a conversation.
**/
export class CodeHookSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lambdaCodeHook" })
  lambdaCodeHook: LambdaCodeHook;
}
