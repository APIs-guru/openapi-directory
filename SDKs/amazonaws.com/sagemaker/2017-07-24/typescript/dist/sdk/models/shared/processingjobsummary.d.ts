import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessingJobStatusEnum } from "./processingjobstatusenum";
/**
 * Summary of information about a processing job.
**/
export declare class ProcessingJobSummary extends SpeakeasyBase {
    creationTime: Date;
    exitMessage?: string;
    failureReason?: string;
    lastModifiedTime?: Date;
    processingEndTime?: Date;
    processingJobArn: string;
    processingJobName: string;
    processingJobStatus: ProcessingJobStatusEnum;
}
