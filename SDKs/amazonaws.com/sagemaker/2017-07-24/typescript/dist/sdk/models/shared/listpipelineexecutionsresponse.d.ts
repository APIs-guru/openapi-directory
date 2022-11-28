import { SpeakeasyBase } from "../../../internal/utils";
import { PipelineExecutionSummary } from "./pipelineexecutionsummary";
export declare class ListPipelineExecutionsResponse extends SpeakeasyBase {
    nextToken?: string;
    pipelineExecutionSummaries?: PipelineExecutionSummary[];
}
