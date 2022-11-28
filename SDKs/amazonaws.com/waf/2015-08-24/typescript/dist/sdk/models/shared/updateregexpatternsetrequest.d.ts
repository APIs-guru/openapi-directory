import { SpeakeasyBase } from "../../../internal/utils";
import { RegexPatternSetUpdate } from "./regexpatternsetupdate";
export declare class UpdateRegexPatternSetRequest extends SpeakeasyBase {
    changeToken: string;
    regexPatternSetId: string;
    updates: RegexPatternSetUpdate[];
}
