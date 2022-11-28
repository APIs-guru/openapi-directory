import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Contact
/** 
 * Contains information on how a buyer or seller can be reached.
**/
export class Contact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}
