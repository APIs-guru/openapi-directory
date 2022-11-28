import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DialogCodeHookSettings
/** 
 * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
**/
export class DialogCodeHookSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;
}
