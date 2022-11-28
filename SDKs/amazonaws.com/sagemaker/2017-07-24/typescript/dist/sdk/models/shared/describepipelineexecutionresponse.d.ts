import { SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { PipelineExecutionStatusEnum } from "./pipelineexecutionstatusenum";
import { PipelineExperimentConfig } from "./pipelineexperimentconfig";
export declare class DescribePipelineExecutionResponse extends SpeakeasyBase {
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
}
