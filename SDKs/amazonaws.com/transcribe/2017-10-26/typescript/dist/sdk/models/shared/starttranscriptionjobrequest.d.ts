import { SpeakeasyBase } from "../../../internal/utils";
import { ContentRedaction } from "./contentredaction";
import { JobExecutionSettings } from "./jobexecutionsettings";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Media } from "./media";
import { MediaFormatEnum } from "./mediaformatenum";
import { ModelSettings } from "./modelsettings";
import { Settings } from "./settings";
import { Subtitles } from "./subtitles";
import { Tag } from "./tag";
export declare class StartTranscriptionJobRequest extends SpeakeasyBase {
    contentRedaction?: ContentRedaction;
    identifyLanguage?: boolean;
    jobExecutionSettings?: JobExecutionSettings;
    kmsEncryptionContext?: Map<string, string>;
    languageCode?: LanguageCodeEnum;
    languageOptions?: LanguageCodeEnum[];
    media: Media;
    mediaFormat?: MediaFormatEnum;
    mediaSampleRateHertz?: number;
    modelSettings?: ModelSettings;
    outputBucketName?: string;
    outputEncryptionKmsKeyId?: string;
    outputKey?: string;
    settings?: Settings;
    subtitles?: Subtitles;
    tags?: Tag[];
    transcriptionJobName: string;
}
