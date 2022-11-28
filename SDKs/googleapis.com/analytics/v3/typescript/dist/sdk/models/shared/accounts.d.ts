import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * An account collection provides a list of Analytics accounts to which a user has access. The account collection is the entry point to all management information. Each resource in the collection corresponds to a single Analytics account.
**/
export declare class Accounts extends SpeakeasyBase {
    items?: Account[];
    itemsPerPage?: number;
    kind?: string;
    nextLink?: string;
    previousLink?: string;
    startIndex?: number;
    totalResults?: number;
    username?: string;
}
