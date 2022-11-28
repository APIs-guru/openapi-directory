import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentLocation } from "./documentlocation";
import { FeatureTypeEnum } from "./featuretypeenum";
import { NotificationChannel } from "./notificationchannel";
import { OutputConfig } from "./outputconfig";
export declare class StartDocumentAnalysisRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    documentLocation: DocumentLocation;
    featureTypes: FeatureTypeEnum[];
    jobTag?: string;
    kmsKeyId?: string;
    notificationChannel?: NotificationChannel;
    outputConfig?: OutputConfig;
}
