import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DialogCodeHookSettings
/** 
 * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
**/
export class DialogCodeHookSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;
}
