import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMlJobSecondaryStatusEnum } from "./automljobsecondarystatusenum";
import { AutoMlJobStatusEnum } from "./automljobstatusenum";
import { AutoMlPartialFailureReason } from "./automlpartialfailurereason";
/**
 * Provides a summary about an AutoML job.
**/
export declare class AutoMlJobSummary extends SpeakeasyBase {
    autoMlJobArn: string;
    autoMlJobName: string;
    autoMlJobSecondaryStatus: AutoMlJobSecondaryStatusEnum;
    autoMlJobStatus: AutoMlJobStatusEnum;
    creationTime: Date;
    endTime?: Date;
    failureReason?: string;
    lastModifiedTime: Date;
    partialFailureReasons?: AutoMlPartialFailureReason[];
}
