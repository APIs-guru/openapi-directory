import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A summary of a pipeline.
**/
export declare class PipelineSummary extends SpeakeasyBase {
    creationTime?: Date;
    lastExecutionTime?: Date;
    lastModifiedTime?: Date;
    pipelineArn?: string;
    pipelineDescription?: string;
    pipelineDisplayName?: string;
    pipelineName?: string;
    roleArn?: string;
}
