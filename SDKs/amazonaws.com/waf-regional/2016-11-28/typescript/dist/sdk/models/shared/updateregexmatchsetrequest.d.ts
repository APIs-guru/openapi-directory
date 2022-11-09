import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RegexMatchSetUpdate } from "./regexmatchsetupdate";
export declare class UpdateRegexMatchSetRequest extends SpeakeasyBase {
    changeToken: string;
    regexMatchSetId: string;
    updates: RegexMatchSetUpdate[];
}
