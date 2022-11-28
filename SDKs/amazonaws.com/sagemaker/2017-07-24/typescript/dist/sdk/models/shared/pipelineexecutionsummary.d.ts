import { SpeakeasyBase } from "../../../internal/utils";
import { PipelineExecutionStatusEnum } from "./pipelineexecutionstatusenum";
/**
 * A pipeline execution summary.
**/
export declare class PipelineExecutionSummary extends SpeakeasyBase {
    pipelineExecutionArn?: string;
    pipelineExecutionDescription?: string;
    pipelineExecutionDisplayName?: string;
    pipelineExecutionStatus?: PipelineExecutionStatusEnum;
    startTime?: Date;
}
