import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Contact
/** 
 * Contains information on how a buyer or seller can be reached.
**/
export class Contact extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;
}
