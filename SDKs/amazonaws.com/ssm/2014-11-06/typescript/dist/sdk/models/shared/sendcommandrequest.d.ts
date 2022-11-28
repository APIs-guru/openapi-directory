import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchOutputConfig } from "./cloudwatchoutputconfig";
import { DocumentHashTypeEnum } from "./documenthashtypeenum";
import { NotificationConfig } from "./notificationconfig";
import { Target } from "./target";
export declare class SendCommandRequest extends SpeakeasyBase {
    cloudWatchOutputConfig?: CloudWatchOutputConfig;
    comment?: string;
    documentHash?: string;
    documentHashType?: DocumentHashTypeEnum;
    documentName: string;
    documentVersion?: string;
    instanceIds?: string[];
    maxConcurrency?: string;
    maxErrors?: string;
    notificationConfig?: NotificationConfig;
    outputS3BucketName?: string;
    outputS3KeyPrefix?: string;
    outputS3Region?: string;
    parameters?: Map<string, string[]>;
    serviceRoleArn?: string;
    targets?: Target[];
    timeoutSeconds?: number;
}
