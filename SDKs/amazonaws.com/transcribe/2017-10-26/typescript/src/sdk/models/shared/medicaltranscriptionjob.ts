import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=CompletionTime" })
  completionTime?: Date;

  @Metadata({ data: "json, name=ContentIdentificationType" })
  contentIdentificationType?: MedicalContentIdentificationTypeEnum;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @Metadata({ data: "json, name=Media" })
  media?: Media;

  @Metadata({ data: "json, name=MediaFormat" })
  mediaFormat?: MediaFormatEnum;

  @Metadata({ data: "json, name=MediaSampleRateHertz" })
  mediaSampleRateHertz?: number;

  @Metadata({ data: "json, name=MedicalTranscriptionJobName" })
  medicalTranscriptionJobName?: string;

  @Metadata({ data: "json, name=Settings" })
  settings?: MedicalTranscriptionSetting;

  @Metadata({ data: "json, name=Specialty" })
  specialty?: SpecialtyEnum;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=Transcript" })
  transcript?: MedicalTranscript;

  @Metadata({ data: "json, name=TranscriptionJobStatus" })
  transcriptionJobStatus?: TranscriptionJobStatusEnum;

  @Metadata({ data: "json, name=Type" })
  type?: TypeEnum;
}
