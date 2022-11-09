import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LambdaCodeHook
/** 
 * Specifies a Lambda function that verifies requests to a bot or fulfilles the user's request to a bot.
**/
export class LambdaCodeHook extends SpeakeasyBase {
  @Metadata({ data: "json, name=codeHookInterfaceVersion" })
  codeHookInterfaceVersion: string;

  @Metadata({ data: "json, name=lambdaARN" })
  lambdaArn: string;
}
