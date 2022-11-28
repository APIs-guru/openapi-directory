import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchOutputConfig } from "./cloudwatchoutputconfig";
import { NotificationConfig } from "./notificationconfig";
import { CommandStatusEnum } from "./commandstatusenum";
import { Target } from "./target";
/**
 * Describes a command request.
**/
export declare class Command extends SpeakeasyBase {
    cloudWatchOutputConfig?: CloudWatchOutputConfig;
    commandId?: string;
    comment?: string;
    completedCount?: number;
    deliveryTimedOutCount?: number;
    documentName?: string;
    documentVersion?: string;
    errorCount?: number;
    expiresAfter?: Date;
    instanceIds?: string[];
    maxConcurrency?: string;
    maxErrors?: string;
    notificationConfig?: NotificationConfig;
    outputS3BucketName?: string;
    outputS3KeyPrefix?: string;
    outputS3Region?: string;
    parameters?: Map<string, string[]>;
    requestedDateTime?: Date;
    serviceRole?: string;
    status?: CommandStatusEnum;
    statusDetails?: string;
    targetCount?: number;
    targets?: Target[];
    timeoutSeconds?: number;
}
