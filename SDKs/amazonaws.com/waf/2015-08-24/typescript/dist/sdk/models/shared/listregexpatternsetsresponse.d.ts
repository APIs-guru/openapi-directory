import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RegexPatternSetSummary } from "./regexpatternsetsummary";
export declare class ListRegexPatternSetsResponse extends SpeakeasyBase {
    nextMarker?: string;
    regexPatternSets?: RegexPatternSetSummary[];
}
