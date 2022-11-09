import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RegexMatchSetSummary } from "./regexmatchsetsummary";
export declare class ListRegexMatchSetsResponse extends SpeakeasyBase {
    nextMarker?: string;
    regexMatchSets?: RegexMatchSetSummary[];
}
