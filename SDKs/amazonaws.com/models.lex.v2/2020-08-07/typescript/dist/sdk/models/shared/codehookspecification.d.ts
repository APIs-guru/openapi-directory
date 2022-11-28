import { SpeakeasyBase } from "../../../internal/utils";
import { LambdaCodeHook } from "./lambdacodehook";
/**
 * Contains information about code hooks that Amazon Lex calls during a conversation.
**/
export declare class CodeHookSpecification extends SpeakeasyBase {
    lambdaCodeHook: LambdaCodeHook;
}
