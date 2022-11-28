import { SpeakeasyBase } from "../../../internal/utils";
import { XssMatchSetSummary } from "./xssmatchsetsummary";
/**
 * The response to a <a>ListXssMatchSets</a> request.
**/
export declare class ListXssMatchSetsResponse extends SpeakeasyBase {
    nextMarker?: string;
    xssMatchSets?: XssMatchSetSummary[];
}
