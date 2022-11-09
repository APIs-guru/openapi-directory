import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=CompletionTime" })
  completionTime?: Date;

  @Metadata({ data: "json, name=ContentRedaction" })
  contentRedaction?: ContentRedaction;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=IdentifiedLanguageScore" })
  identifiedLanguageScore?: number;

  @Metadata({ data: "json, name=IdentifyLanguage" })
  identifyLanguage?: boolean;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @Metadata({ data: "json, name=ModelSettings" })
  modelSettings?: ModelSettings;

  @Metadata({ data: "json, name=OutputLocationType" })
  outputLocationType?: OutputLocationTypeEnum;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=TranscriptionJobName" })
  transcriptionJobName?: string;

  @Metadata({ data: "json, name=TranscriptionJobStatus" })
  transcriptionJobStatus?: TranscriptionJobStatusEnum;
}
