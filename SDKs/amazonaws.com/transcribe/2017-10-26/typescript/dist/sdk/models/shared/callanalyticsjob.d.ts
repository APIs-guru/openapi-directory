import { SpeakeasyBase } from "../../../internal/utils";
import { CallAnalyticsJobStatusEnum } from "./callanalyticsjobstatusenum";
import { ChannelDefinition } from "./channeldefinition";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Media } from "./media";
import { MediaFormatEnum } from "./mediaformatenum";
import { CallAnalyticsJobSettings } from "./callanalyticsjobsettings";
import { Transcript } from "./transcript";
/**
 * Describes an asynchronous analytics job that was created with the <code>StartAnalyticsJob</code> operation.
**/
export declare class CallAnalyticsJob extends SpeakeasyBase {
    callAnalyticsJobName?: string;
    callAnalyticsJobStatus?: CallAnalyticsJobStatusEnum;
    channelDefinitions?: ChannelDefinition[];
    completionTime?: Date;
    creationTime?: Date;
    dataAccessRoleArn?: string;
    failureReason?: string;
    identifiedLanguageScore?: number;
    languageCode?: LanguageCodeEnum;
    media?: Media;
    mediaFormat?: MediaFormatEnum;
    mediaSampleRateHertz?: number;
    settings?: CallAnalyticsJobSettings;
    startTime?: Date;
    transcript?: Transcript;
}
