import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentLocation } from "./documentlocation";
import { NotificationChannel } from "./notificationchannel";
import { OutputConfig } from "./outputconfig";
export declare class StartDocumentTextDetectionRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    documentLocation: DocumentLocation;
    jobTag?: string;
    kmsKeyId?: string;
    notificationChannel?: NotificationChannel;
    outputConfig?: OutputConfig;
}
