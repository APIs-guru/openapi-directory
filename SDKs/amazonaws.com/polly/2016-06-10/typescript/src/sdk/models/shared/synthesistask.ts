import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EngineEnum } from "./engineenum";
import { LanguageCodeEnum } from "./languagecodeenum";
import { OutputFormatEnum } from "./outputformatenum";
import { SpeechMarkTypeEnum } from "./speechmarktypeenum";
import { TaskStatusEnum } from "./taskstatusenum";
import { TextTypeEnum } from "./texttypeenum";
import { VoiceIdEnum } from "./voiceidenum";



// SynthesisTask
/** 
 * SynthesisTask object that provides information about a speech synthesis task.
**/
export class SynthesisTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Engine" })
  engine?: EngineEnum;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=LexiconNames" })
  lexiconNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=OutputFormat" })
  outputFormat?: OutputFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=OutputUri" })
  outputUri?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestCharacters" })
  requestCharacters?: number;

  @SpeakeasyMetadata({ data: "json, name=SampleRate" })
  sampleRate?: string;

  @SpeakeasyMetadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SpeechMarkTypes" })
  speechMarkTypes?: SpeechMarkTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=TaskId" })
  taskId?: string;

  @SpeakeasyMetadata({ data: "json, name=TaskStatus" })
  taskStatus?: TaskStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TaskStatusReason" })
  taskStatusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=TextType" })
  textType?: TextTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=VoiceId" })
  voiceId?: VoiceIdEnum;
}
