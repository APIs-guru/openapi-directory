import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MedicalContentIdentificationTypeEnum } from "./medicalcontentidentificationtypeenum";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Media } from "./media";
import { MediaFormatEnum } from "./mediaformatenum";
import { MedicalTranscriptionSetting } from "./medicaltranscriptionsetting";
import { SpecialtyEnum } from "./specialtyenum";
import { Tag } from "./tag";
import { TypeEnum } from "./typeenum";



export class StartMedicalTranscriptionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentIdentificationType" })
  contentIdentificationType?: MedicalContentIdentificationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=KMSEncryptionContext" })
  kmsEncryptionContext?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Media" })
  media: Media;

  @SpeakeasyMetadata({ data: "json, name=MediaFormat" })
  mediaFormat?: MediaFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=MediaSampleRateHertz" })
  mediaSampleRateHertz?: number;

  @SpeakeasyMetadata({ data: "json, name=MedicalTranscriptionJobName" })
  medicalTranscriptionJobName: string;

  @SpeakeasyMetadata({ data: "json, name=OutputBucketName" })
  outputBucketName: string;

  @SpeakeasyMetadata({ data: "json, name=OutputEncryptionKMSKeyId" })
  outputEncryptionKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputKey" })
  outputKey?: string;

  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings?: MedicalTranscriptionSetting;

  @SpeakeasyMetadata({ data: "json, name=Specialty" })
  specialty: SpecialtyEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: TypeEnum;
}
