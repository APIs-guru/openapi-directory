import { SpeakeasyBase } from "../../../internal/utils";
import { TrainingJobStatusEnum } from "./trainingjobstatusenum";
/**
 * Provides summary information about a training job.
**/
export declare class TrainingJobSummary extends SpeakeasyBase {
    creationTime: Date;
    lastModifiedTime?: Date;
    trainingEndTime?: Date;
    trainingJobArn: string;
    trainingJobName: string;
    trainingJobStatus: TrainingJobStatusEnum;
}
