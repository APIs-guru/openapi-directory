import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Button
/** 
 * A button that appears on a response card show to the user.
**/
export class Button extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
