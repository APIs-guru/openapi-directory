import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MedicalContentIdentificationTypeEnum } from "./medicalcontentidentificationtypeenum";
import { LanguageCodeEnum } from "./languagecodeenum";
import { OutputLocationTypeEnum } from "./outputlocationtypeenum";
import { SpecialtyEnum } from "./specialtyenum";
import { TranscriptionJobStatusEnum } from "./transcriptionjobstatusenum";
import { TypeEnum } from "./typeenum";


// MedicalTranscriptionJobSummary
/** 
 * Provides summary information about a transcription job.
**/
export class MedicalTranscriptionJobSummary extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=MedicalTranscriptionJobName" })
  medicalTranscriptionJobName?: string;

  @Metadata({ data: "json, name=OutputLocationType" })
  outputLocationType?: OutputLocationTypeEnum;

  @Metadata({ data: "json, name=Specialty" })
  specialty?: SpecialtyEnum;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=TranscriptionJobStatus" })
  transcriptionJobStatus?: TranscriptionJobStatusEnum;

  @Metadata({ data: "json, name=Type" })
  type?: TypeEnum;
}
