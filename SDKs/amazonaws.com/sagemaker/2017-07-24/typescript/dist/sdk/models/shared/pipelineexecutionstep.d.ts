import { SpeakeasyBase } from "../../../internal/utils";
import { CacheHitResult } from "./cachehitresult";
import { PipelineExecutionStepMetadata } from "./pipelineexecutionstepmetadata";
import { StepStatusEnum } from "./stepstatusenum";
/**
 * An execution of a step in a pipeline.
**/
export declare class PipelineExecutionStep extends SpeakeasyBase {
    cacheHitResult?: CacheHitResult;
    endTime?: Date;
    failureReason?: string;
    metadata?: PipelineExecutionStepMetadata;
    startTime?: Date;
    stepName?: string;
    stepStatus?: StepStatusEnum;
}
