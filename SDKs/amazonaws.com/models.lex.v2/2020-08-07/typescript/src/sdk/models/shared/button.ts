import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Button
/** 
 * Describes a button to use on a response card used to gather slot values from a user.
**/
export class Button extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
