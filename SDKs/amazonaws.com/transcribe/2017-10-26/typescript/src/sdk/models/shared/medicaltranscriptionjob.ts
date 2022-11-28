import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// MedicalTranscriptionJob
/** 
 * The data structure that contains the information for a medical transcription job.
**/
export class MedicalTranscriptionJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompletionTime" })
  completionTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ContentIdentificationType" })
  contentIdentificationType?: MedicalContentIdentificationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Media" })
  media?: Media;

  @SpeakeasyMetadata({ data: "json, name=MediaFormat" })
  mediaFormat?: MediaFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=MediaSampleRateHertz" })
  mediaSampleRateHertz?: number;

  @SpeakeasyMetadata({ data: "json, name=MedicalTranscriptionJobName" })
  medicalTranscriptionJobName?: string;

  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings?: MedicalTranscriptionSetting;

  @SpeakeasyMetadata({ data: "json, name=Specialty" })
  specialty?: SpecialtyEnum;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Transcript" })
  transcript?: MedicalTranscript;

  @SpeakeasyMetadata({ data: "json, name=TranscriptionJobStatus" })
  transcriptionJobStatus?: TranscriptionJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: TypeEnum;
}
