import { SpeakeasyBase } from "../../../internal/utils";
import { LabelingJobInputConfig } from "./labelingjobinputconfig";
import { LabelCounters } from "./labelcounters";
import { LabelingJobOutput } from "./labelingjoboutput";
import { LabelingJobStatusEnum } from "./labelingjobstatusenum";
/**
 * Provides summary information about a labeling job.
**/
export declare class LabelingJobSummary extends SpeakeasyBase {
    annotationConsolidationLambdaArn?: string;
    creationTime: Date;
    failureReason?: string;
    inputConfig?: LabelingJobInputConfig;
    labelCounters: LabelCounters;
    labelingJobArn: string;
    labelingJobName: string;
    labelingJobOutput?: LabelingJobOutput;
    labelingJobStatus: LabelingJobStatusEnum;
    lastModifiedTime: Date;
    preHumanTaskLambdaArn: string;
    workteamArn: string;
}
