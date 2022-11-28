import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContactInformation
/** 
 * Contains information on how a buyer or seller can be reached.
**/
export class ContactInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
