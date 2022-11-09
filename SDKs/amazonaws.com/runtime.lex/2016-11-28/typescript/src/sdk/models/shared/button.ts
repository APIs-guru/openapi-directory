import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Button
/** 
 * Represents an option to be shown on the client platform (Facebook, Slack, etc.)
**/
export class Button extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
