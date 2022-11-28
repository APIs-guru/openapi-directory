import { SpeakeasyBase } from "../../../internal/utils";
import { ContentRedaction } from "./contentredaction";
import { JobExecutionSettings } from "./jobexecutionsettings";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Media } from "./media";
import { MediaFormatEnum } from "./mediaformatenum";
import { ModelSettings } from "./modelsettings";
import { Settings } from "./settings";
import { SubtitlesOutput } from "./subtitlesoutput";
import { Tag } from "./tag";
import { Transcript } from "./transcript";
import { TranscriptionJobStatusEnum } from "./transcriptionjobstatusenum";
/**
 * Describes an asynchronous transcription job that was created with the <code>StartTranscriptionJob</code> operation.
**/
export declare class TranscriptionJob extends SpeakeasyBase {
    completionTime?: Date;
    contentRedaction?: ContentRedaction;
    creationTime?: Date;
    failureReason?: string;
    identifiedLanguageScore?: number;
    identifyLanguage?: boolean;
    jobExecutionSettings?: JobExecutionSettings;
    languageCode?: LanguageCodeEnum;
    languageOptions?: LanguageCodeEnum[];
    media?: Media;
    mediaFormat?: MediaFormatEnum;
    mediaSampleRateHertz?: number;
    modelSettings?: ModelSettings;
    settings?: Settings;
    startTime?: Date;
    subtitles?: SubtitlesOutput;
    tags?: Tag[];
    transcript?: Transcript;
    transcriptionJobName?: string;
    transcriptionJobStatus?: TranscriptionJobStatusEnum;
}
