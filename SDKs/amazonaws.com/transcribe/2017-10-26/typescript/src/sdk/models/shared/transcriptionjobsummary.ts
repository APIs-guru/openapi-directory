import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentRedaction } from "./contentredaction";
import { LanguageCodeEnum } from "./languagecodeenum";
import { ModelSettings } from "./modelsettings";
import { OutputLocationTypeEnum } from "./outputlocationtypeenum";
import { TranscriptionJobStatusEnum } from "./transcriptionjobstatusenum";



// TranscriptionJobSummary
/** 
 * Provides a summary of information about a transcription job.
**/
export class TranscriptionJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompletionTime" })
  completionTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ContentRedaction" })
  contentRedaction?: ContentRedaction;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentifiedLanguageScore" })
  identifiedLanguageScore?: number;

  @SpeakeasyMetadata({ data: "json, name=IdentifyLanguage" })
  identifyLanguage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=ModelSettings" })
  modelSettings?: ModelSettings;

  @SpeakeasyMetadata({ data: "json, name=OutputLocationType" })
  outputLocationType?: OutputLocationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TranscriptionJobName" })
  transcriptionJobName?: string;

  @SpeakeasyMetadata({ data: "json, name=TranscriptionJobStatus" })
  transcriptionJobStatus?: TranscriptionJobStatusEnum;
}
