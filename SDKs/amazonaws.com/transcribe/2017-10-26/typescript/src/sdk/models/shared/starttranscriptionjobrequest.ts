import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentRedaction } from "./contentredaction";
import { JobExecutionSettings } from "./jobexecutionsettings";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Media } from "./media";
import { MediaFormatEnum } from "./mediaformatenum";
import { ModelSettings } from "./modelsettings";
import { Settings } from "./settings";
import { Subtitles } from "./subtitles";
import { Tag } from "./tag";



export class StartTranscriptionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentRedaction" })
  contentRedaction?: ContentRedaction;

  @SpeakeasyMetadata({ data: "json, name=IdentifyLanguage" })
  identifyLanguage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=JobExecutionSettings" })
  jobExecutionSettings?: JobExecutionSettings;

  @SpeakeasyMetadata({ data: "json, name=KMSEncryptionContext" })
  kmsEncryptionContext?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=LanguageOptions" })
  languageOptions?: LanguageCodeEnum[];

  @SpeakeasyMetadata({ data: "json, name=Media" })
  media: Media;

  @SpeakeasyMetadata({ data: "json, name=MediaFormat" })
  mediaFormat?: MediaFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=MediaSampleRateHertz" })
  mediaSampleRateHertz?: number;

  @SpeakeasyMetadata({ data: "json, name=ModelSettings" })
  modelSettings?: ModelSettings;

  @SpeakeasyMetadata({ data: "json, name=OutputBucketName" })
  outputBucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputEncryptionKMSKeyId" })
  outputEncryptionKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputKey" })
  outputKey?: string;

  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings?: Settings;

  @SpeakeasyMetadata({ data: "json, name=Subtitles" })
  subtitles?: Subtitles;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TranscriptionJobName" })
  transcriptionJobName: string;
}
