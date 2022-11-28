import { SpeakeasyBase } from "../../../internal/utils";
import { ContactListImportActionEnum } from "./contactlistimportactionenum";
/**
 * An object that contains details about the action of a contact list.
**/
export declare class ContactListDestination extends SpeakeasyBase {
    contactListImportAction: ContactListImportActionEnum;
    contactListName: string;
}
