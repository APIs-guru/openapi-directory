import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Content } from "./content";
import { Content } from "./content";


// Body
/** 
 * Represents the body of the email message.
**/
export class Body extends SpeakeasyBase {
  @Metadata({ data: "json, name=Html" })
  html?: Content;

  @Metadata({ data: "json, name=Text" })
  text?: Content;
}
