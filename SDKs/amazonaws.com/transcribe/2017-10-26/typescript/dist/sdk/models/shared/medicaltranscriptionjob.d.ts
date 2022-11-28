import { SpeakeasyBase } from "../../../internal/utils";
import { MedicalContentIdentificationTypeEnum } from "./medicalcontentidentificationtypeenum";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Media } from "./media";
import { MediaFormatEnum } from "./mediaformatenum";
import { MedicalTranscriptionSetting } from "./medicaltranscriptionsetting";
import { SpecialtyEnum } from "./specialtyenum";
import { Tag } from "./tag";
import { MedicalTranscript } from "./medicaltranscript";
import { TranscriptionJobStatusEnum } from "./transcriptionjobstatusenum";
import { TypeEnum } from "./typeenum";
/**
 * The data structure that contains the information for a medical transcription job.
**/
export declare class MedicalTranscriptionJob extends SpeakeasyBase {
    completionTime?: Date;
    contentIdentificationType?: MedicalContentIdentificationTypeEnum;
    creationTime?: Date;
    failureReason?: string;
    languageCode?: LanguageCodeEnum;
    media?: Media;
    mediaFormat?: MediaFormatEnum;
    mediaSampleRateHertz?: number;
    medicalTranscriptionJobName?: string;
    settings?: MedicalTranscriptionSetting;
    specialty?: SpecialtyEnum;
    startTime?: Date;
    tags?: Tag[];
    transcript?: MedicalTranscript;
    transcriptionJobStatus?: TranscriptionJobStatusEnum;
    type?: TypeEnum;
}
