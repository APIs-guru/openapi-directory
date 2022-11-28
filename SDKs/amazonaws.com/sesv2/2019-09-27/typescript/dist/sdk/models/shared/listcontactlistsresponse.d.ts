import { SpeakeasyBase } from "../../../internal/utils";
import { ContactList } from "./contactlist";
export declare class ListContactListsResponse extends SpeakeasyBase {
    contactLists?: ContactList[];
    nextToken?: string;
}
