import { SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { PipelineExecutionStatusEnum } from "./pipelineexecutionstatusenum";
import { PipelineExperimentConfig } from "./pipelineexperimentconfig";
import { Parameter } from "./parameter";
/**
 * An execution of a pipeline.
**/
export declare class PipelineExecution extends SpeakeasyBase {
    createdBy?: UserContext;
    creationTime?: Date;
    failureReason?: string;
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    pipelineArn?: string;
    pipelineExecutionArn?: string;
    pipelineExecutionDescription?: string;
    pipelineExecutionDisplayName?: string;
    pipelineExecutionStatus?: PipelineExecutionStatusEnum;
    pipelineExperimentConfig?: PipelineExperimentConfig;
    pipelineParameters?: Parameter[];
}
