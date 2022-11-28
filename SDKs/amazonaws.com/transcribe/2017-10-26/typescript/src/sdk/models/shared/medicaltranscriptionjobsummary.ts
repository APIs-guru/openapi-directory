import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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

  @SpeakeasyMetadata({ data: "json, name=MedicalTranscriptionJobName" })
  medicalTranscriptionJobName?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputLocationType" })
  outputLocationType?: OutputLocationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Specialty" })
  specialty?: SpecialtyEnum;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TranscriptionJobStatus" })
  transcriptionJobStatus?: TranscriptionJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: TypeEnum;
}
