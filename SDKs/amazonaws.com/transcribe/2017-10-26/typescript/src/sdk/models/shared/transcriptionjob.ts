import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentRedaction } from "./contentredaction";
import { JobExecutionSettings } from "./jobexecutionsettings";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Media } from "./media";
import { MediaFormatEnum } from "./mediaformatenum";
import { ModelSettings } from "./modelsettings";
import { Settings } from "./settings";
import { SubtitlesOutput } from "./subtitlesoutput";
import { Tag } from "./tag";
import { Transcript } from "./transcript";
import { TranscriptionJobStatusEnum } from "./transcriptionjobstatusenum";



// TranscriptionJob
/** 
 * Describes an asynchronous transcription job that was created with the <code>StartTranscriptionJob</code> operation. 
**/
export class TranscriptionJob extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=JobExecutionSettings" })
  jobExecutionSettings?: JobExecutionSettings;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=LanguageOptions" })
  languageOptions?: LanguageCodeEnum[];

  @SpeakeasyMetadata({ data: "json, name=Media" })
  media?: Media;

  @SpeakeasyMetadata({ data: "json, name=MediaFormat" })
  mediaFormat?: MediaFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=MediaSampleRateHertz" })
  mediaSampleRateHertz?: number;

  @SpeakeasyMetadata({ data: "json, name=ModelSettings" })
  modelSettings?: ModelSettings;

  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings?: Settings;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Subtitles" })
  subtitles?: SubtitlesOutput;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Transcript" })
  transcript?: Transcript;

  @SpeakeasyMetadata({ data: "json, name=TranscriptionJobName" })
  transcriptionJobName?: string;

  @SpeakeasyMetadata({ data: "json, name=TranscriptionJobStatus" })
  transcriptionJobStatus?: TranscriptionJobStatusEnum;
}
