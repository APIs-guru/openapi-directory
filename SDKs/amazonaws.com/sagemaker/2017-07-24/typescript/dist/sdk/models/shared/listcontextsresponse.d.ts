import { SpeakeasyBase } from "../../../internal/utils";
import { ContextSummary } from "./contextsummary";
export declare class ListContextsResponse extends SpeakeasyBase {
    contextSummaries?: ContextSummary[];
    nextToken?: string;
}
