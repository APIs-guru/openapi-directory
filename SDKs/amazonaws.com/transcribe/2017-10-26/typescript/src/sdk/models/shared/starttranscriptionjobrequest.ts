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
import { Subtitles } from "./subtitles";
import { Tag } from "./tag";


export class StartTranscriptionJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContentRedaction" })
  contentRedaction?: ContentRedaction;

  @Metadata({ data: "json, name=IdentifyLanguage" })
  identifyLanguage?: boolean;

  @Metadata({ data: "json, name=JobExecutionSettings" })
  jobExecutionSettings?: JobExecutionSettings;

  @Metadata({ data: "json, name=KMSEncryptionContext" })
  kmsEncryptionContext?: Map<string, string>;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @Metadata({ data: "json, name=LanguageOptions" })
  languageOptions?: LanguageCodeEnum[];

  @Metadata({ data: "json, name=Media" })
  media: Media;

  @Metadata({ data: "json, name=MediaFormat" })
  mediaFormat?: MediaFormatEnum;

  @Metadata({ data: "json, name=MediaSampleRateHertz" })
  mediaSampleRateHertz?: number;

  @Metadata({ data: "json, name=ModelSettings" })
  modelSettings?: ModelSettings;

  @Metadata({ data: "json, name=OutputBucketName" })
  outputBucketName?: string;

  @Metadata({ data: "json, name=OutputEncryptionKMSKeyId" })
  outputEncryptionKmsKeyId?: string;

  @Metadata({ data: "json, name=OutputKey" })
  outputKey?: string;

  @Metadata({ data: "json, name=Settings" })
  settings?: Settings;

  @Metadata({ data: "json, name=Subtitles" })
  subtitles?: Subtitles;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TranscriptionJobName" })
  transcriptionJobName: string;
}
