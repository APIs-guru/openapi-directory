import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Content } from "./content";



// Body
/** 
 * Represents the body of the email message.
**/
export class Body extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Html" })
  html?: Content;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: Content;
}
