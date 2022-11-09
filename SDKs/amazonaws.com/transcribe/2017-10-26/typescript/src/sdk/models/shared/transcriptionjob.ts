import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContentRedaction } from "./contentredaction";
import { JobExecutionSettings } from "./jobexecutionsettings";
import { LanguageCodeEnum } from "./languagecodeenum";
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

  @Metadata({ data: "json, name=JobExecutionSettings" })
  jobExecutionSettings?: JobExecutionSettings;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @Metadata({ data: "json, name=LanguageOptions" })
  languageOptions?: LanguageCodeEnum[];

  @Metadata({ data: "json, name=Media" })
  media?: Media;

  @Metadata({ data: "json, name=MediaFormat" })
  mediaFormat?: MediaFormatEnum;

  @Metadata({ data: "json, name=MediaSampleRateHertz" })
  mediaSampleRateHertz?: number;

  @Metadata({ data: "json, name=ModelSettings" })
  modelSettings?: ModelSettings;

  @Metadata({ data: "json, name=Settings" })
  settings?: Settings;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Subtitles" })
  subtitles?: SubtitlesOutput;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=Transcript" })
  transcript?: Transcript;

  @Metadata({ data: "json, name=TranscriptionJobName" })
  transcriptionJobName?: string;

  @Metadata({ data: "json, name=TranscriptionJobStatus" })
  transcriptionJobStatus?: TranscriptionJobStatusEnum;
}
