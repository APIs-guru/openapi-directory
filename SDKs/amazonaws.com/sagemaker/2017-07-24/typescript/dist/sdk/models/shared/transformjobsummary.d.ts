import { SpeakeasyBase } from "../../../internal/utils";
import { TransformJobStatusEnum } from "./transformjobstatusenum";
/**
 * Provides a summary of a transform job. Multiple <code>TransformJobSummary</code> objects are returned as a list after in response to a <a>ListTransformJobs</a> call.
**/
export declare class TransformJobSummary extends SpeakeasyBase {
    creationTime: Date;
    failureReason?: string;
    lastModifiedTime?: Date;
    transformEndTime?: Date;
    transformJobArn: string;
    transformJobName: string;
    transformJobStatus: TransformJobStatusEnum;
}
