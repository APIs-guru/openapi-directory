import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LambdaCodeHook
/** 
 * Specifies a Lambda function that verifies requests to a bot or fulfilles the user's request to a bot.
**/
export class LambdaCodeHook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=codeHookInterfaceVersion" })
  codeHookInterfaceVersion: string;

  @SpeakeasyMetadata({ data: "json, name=lambdaARN" })
  lambdaArn: string;
}
