import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactListImportActionEnum } from "./contactlistimportactionenum";


// ContactListDestination
/** 
 * An object that contains details about the action of a contact list.
**/
export class ContactListDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactListImportAction" })
  contactListImportAction: ContactListImportActionEnum;

  @Metadata({ data: "json, name=ContactListName" })
  contactListName: string;
}
