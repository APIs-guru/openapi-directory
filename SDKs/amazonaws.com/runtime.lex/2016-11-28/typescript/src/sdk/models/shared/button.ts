import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Button
/** 
 * Represents an option to be shown on the client platform (Facebook, Slack, etc.)
**/
export class Button extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
