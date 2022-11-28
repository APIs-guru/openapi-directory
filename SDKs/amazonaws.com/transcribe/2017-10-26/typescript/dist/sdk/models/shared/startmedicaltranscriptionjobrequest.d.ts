import { SpeakeasyBase } from "../../../internal/utils";
import { MedicalContentIdentificationTypeEnum } from "./medicalcontentidentificationtypeenum";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Media } from "./media";
import { MediaFormatEnum } from "./mediaformatenum";
import { MedicalTranscriptionSetting } from "./medicaltranscriptionsetting";
import { SpecialtyEnum } from "./specialtyenum";
import { Tag } from "./tag";
import { TypeEnum } from "./typeenum";
export declare class StartMedicalTranscriptionJobRequest extends SpeakeasyBase {
    contentIdentificationType?: MedicalContentIdentificationTypeEnum;
    kmsEncryptionContext?: Map<string, string>;
    languageCode: LanguageCodeEnum;
    media: Media;
    mediaFormat?: MediaFormatEnum;
    mediaSampleRateHertz?: number;
    medicalTranscriptionJobName: string;
    outputBucketName: string;
    outputEncryptionKmsKeyId?: string;
    outputKey?: string;
    settings?: MedicalTranscriptionSetting;
    specialty: SpecialtyEnum;
    tags?: Tag[];
    type: TypeEnum;
}
