import { SpeakeasyBase } from "../../../internal/utils";
import { ContentRedaction } from "./contentredaction";
import { LanguageCodeEnum } from "./languagecodeenum";
import { ModelSettings } from "./modelsettings";
import { OutputLocationTypeEnum } from "./outputlocationtypeenum";
import { TranscriptionJobStatusEnum } from "./transcriptionjobstatusenum";
/**
 * Provides a summary of information about a transcription job.
**/
export declare class TranscriptionJobSummary extends SpeakeasyBase {
    completionTime?: Date;
    contentRedaction?: ContentRedaction;
    creationTime?: Date;
    failureReason?: string;
    identifiedLanguageScore?: number;
    identifyLanguage?: boolean;
    languageCode?: LanguageCodeEnum;
    modelSettings?: ModelSettings;
    outputLocationType?: OutputLocationTypeEnum;
    startTime?: Date;
    transcriptionJobName?: string;
    transcriptionJobStatus?: TranscriptionJobStatusEnum;
}
