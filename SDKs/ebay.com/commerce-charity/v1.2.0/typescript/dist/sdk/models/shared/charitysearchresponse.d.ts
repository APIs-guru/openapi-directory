import { SpeakeasyBase } from "../../../internal/utils";
import { CharityOrg } from "./charityorg";
/**
 * A single set of search results, with information for accessing other sets.
**/
export declare class CharitySearchResponse extends SpeakeasyBase {
    charityOrgs?: CharityOrg[];
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    prev?: string;
    total?: number;
}
