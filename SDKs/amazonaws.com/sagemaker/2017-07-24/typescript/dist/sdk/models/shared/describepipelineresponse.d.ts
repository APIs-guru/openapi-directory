import { SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { PipelineStatusEnum } from "./pipelinestatusenum";
export declare class DescribePipelineResponse extends SpeakeasyBase {
    createdBy?: UserContext;
    creationTime?: Date;
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    lastRunTime?: Date;
    pipelineArn?: string;
    pipelineDefinition?: string;
    pipelineDescription?: string;
    pipelineDisplayName?: string;
    pipelineName?: string;
    pipelineStatus?: PipelineStatusEnum;
    roleArn?: string;
}
