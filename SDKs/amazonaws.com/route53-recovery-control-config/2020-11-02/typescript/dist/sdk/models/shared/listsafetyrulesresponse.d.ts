import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Rule } from "./rule";
export declare class ListSafetyRulesResponse extends SpeakeasyBase {
    nextToken?: string;
    safetyRules?: Rule[];
}
