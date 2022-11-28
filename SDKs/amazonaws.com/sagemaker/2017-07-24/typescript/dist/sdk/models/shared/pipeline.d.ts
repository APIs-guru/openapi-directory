import { SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { PipelineStatusEnum } from "./pipelinestatusenum";
import { Tag } from "./tag";
/**
 * A SageMaker Model Building Pipeline instance.
**/
export declare class Pipeline extends SpeakeasyBase {
    createdBy?: UserContext;
    creationTime?: Date;
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    lastRunTime?: Date;
    pipelineArn?: string;
    pipelineDescription?: string;
    pipelineDisplayName?: string;
    pipelineName?: string;
    pipelineStatus?: PipelineStatusEnum;
    roleArn?: string;
    tags?: Tag[];
}
