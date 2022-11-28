import { SpeakeasyBase } from "../../../internal/utils";
import { FlowExecutionSummary } from "./flowexecutionsummary";
export declare class SearchFlowExecutionsResponse extends SpeakeasyBase {
    nextToken?: string;
    summaries?: FlowExecutionSummary[];
}
