import { SpeakeasyBase } from "../../../internal/utils";
import { SqlInjectionMatchSetSummary } from "./sqlinjectionmatchsetsummary";
/**
 * The response to a <a>ListSqlInjectionMatchSets</a> request.
**/
export declare class ListSqlInjectionMatchSetsResponse extends SpeakeasyBase {
    nextMarker?: string;
    sqlInjectionMatchSets?: SqlInjectionMatchSetSummary[];
}
