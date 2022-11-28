import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Button
/** 
 * A button that appears on a response card show to the user.
**/
export class Button extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
