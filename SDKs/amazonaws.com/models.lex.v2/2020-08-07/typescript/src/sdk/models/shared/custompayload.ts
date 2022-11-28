import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomPayload
/** 
 * A custom response string that Amazon Lex sends to your application. You define the content and structure the string.
**/
export class CustomPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
