import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Button
/** 
 * Describes a button to use on a response card used to gather slot values from a user.
**/
export class Button extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
