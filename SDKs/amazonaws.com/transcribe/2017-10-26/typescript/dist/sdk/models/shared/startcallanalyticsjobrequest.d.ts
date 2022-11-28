import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelDefinition } from "./channeldefinition";
import { Media } from "./media";
import { CallAnalyticsJobSettings } from "./callanalyticsjobsettings";
export declare class StartCallAnalyticsJobRequest extends SpeakeasyBase {
    callAnalyticsJobName: string;
    channelDefinitions?: ChannelDefinition[];
    dataAccessRoleArn: string;
    media: Media;
    outputEncryptionKmsKeyId?: string;
    outputLocation?: string;
    settings?: CallAnalyticsJobSettings;
}
