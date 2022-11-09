import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RegexPatternSetUpdate } from "./regexpatternsetupdate";
export declare class UpdateRegexPatternSetRequest extends SpeakeasyBase {
    changeToken: string;
    regexPatternSetId: string;
    updates: RegexPatternSetUpdate[];
}
