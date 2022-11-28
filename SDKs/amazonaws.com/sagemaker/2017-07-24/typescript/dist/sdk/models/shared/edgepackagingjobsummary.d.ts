import { SpeakeasyBase } from "../../../internal/utils";
import { EdgePackagingJobStatusEnum } from "./edgepackagingjobstatusenum";
/**
 * Summary of edge packaging job.
**/
export declare class EdgePackagingJobSummary extends SpeakeasyBase {
    compilationJobName?: string;
    creationTime?: Date;
    edgePackagingJobArn: string;
    edgePackagingJobName: string;
    edgePackagingJobStatus: EdgePackagingJobStatusEnum;
    lastModifiedTime?: Date;
    modelName?: string;
    modelVersion?: string;
}
