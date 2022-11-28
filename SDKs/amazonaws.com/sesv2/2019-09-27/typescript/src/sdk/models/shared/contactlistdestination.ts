import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactListImportActionEnum } from "./contactlistimportactionenum";



// ContactListDestination
/** 
 * An object that contains details about the action of a contact list.
**/
export class ContactListDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactListImportAction" })
  contactListImportAction: ContactListImportActionEnum;

  @SpeakeasyMetadata({ data: "json, name=ContactListName" })
  contactListName: string;
}
