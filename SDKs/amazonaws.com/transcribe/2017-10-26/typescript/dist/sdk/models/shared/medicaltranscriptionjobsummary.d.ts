import { SpeakeasyBase } from "../../../internal/utils";
import { MedicalContentIdentificationTypeEnum } from "./medicalcontentidentificationtypeenum";
import { LanguageCodeEnum } from "./languagecodeenum";
import { OutputLocationTypeEnum } from "./outputlocationtypeenum";
import { SpecialtyEnum } from "./specialtyenum";
import { TranscriptionJobStatusEnum } from "./transcriptionjobstatusenum";
import { TypeEnum } from "./typeenum";
/**
 * Provides summary information about a transcription job.
**/
export declare class MedicalTranscriptionJobSummary extends SpeakeasyBase {
    completionTime?: Date;
    contentIdentificationType?: MedicalContentIdentificationTypeEnum;
    creationTime?: Date;
    failureReason?: string;
    languageCode?: LanguageCodeEnum;
    medicalTranscriptionJobName?: string;
    outputLocationType?: OutputLocationTypeEnum;
    specialty?: SpecialtyEnum;
    startTime?: Date;
    transcriptionJobStatus?: TranscriptionJobStatusEnum;
    type?: TypeEnum;
}
