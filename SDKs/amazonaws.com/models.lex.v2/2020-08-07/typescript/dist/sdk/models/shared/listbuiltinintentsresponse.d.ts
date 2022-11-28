import { SpeakeasyBase } from "../../../internal/utils";
import { BuiltInIntentSummary } from "./builtinintentsummary";
export declare class ListBuiltInIntentsResponse extends SpeakeasyBase {
    builtInIntentSummaries?: BuiltInIntentSummary[];
    localeId?: string;
    nextToken?: string;
}
