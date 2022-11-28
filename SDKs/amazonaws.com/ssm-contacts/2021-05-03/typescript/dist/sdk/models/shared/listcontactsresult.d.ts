import { SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
export declare class ListContactsResult extends SpeakeasyBase {
    contacts?: Contact[];
    nextToken?: string;
}
