import { SpeakeasyBase } from "../../../internal/utils";
import { AccountSummary } from "./accountsummary";
/**
 * An AccountSummary collection lists a summary of accounts, properties and views (profiles) to which the user has access. Each resource in the collection corresponds to a single AccountSummary.
**/
export declare class AccountSummaries extends SpeakeasyBase {
    items?: AccountSummary[];
    itemsPerPage?: number;
    kind?: string;
    nextLink?: string;
    previousLink?: string;
    startIndex?: number;
    totalResults?: number;
    username?: string;
}
