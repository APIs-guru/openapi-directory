import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Engine" })
  engine?: EngineEnum;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @Metadata({ data: "json, name=LexiconNames" })
  lexiconNames?: string[];

  @Metadata({ data: "json, name=OutputFormat" })
  outputFormat?: OutputFormatEnum;

  @Metadata({ data: "json, name=OutputUri" })
  outputUri?: string;

  @Metadata({ data: "json, name=RequestCharacters" })
  requestCharacters?: number;

  @Metadata({ data: "json, name=SampleRate" })
  sampleRate?: string;

  @Metadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn?: string;

  @Metadata({ data: "json, name=SpeechMarkTypes" })
  speechMarkTypes?: SpeechMarkTypeEnum[];

  @Metadata({ data: "json, name=TaskId" })
  taskId?: string;

  @Metadata({ data: "json, name=TaskStatus" })
  taskStatus?: TaskStatusEnum;

  @Metadata({ data: "json, name=TaskStatusReason" })
  taskStatusReason?: string;

  @Metadata({ data: "json, name=TextType" })
  textType?: TextTypeEnum;

  @Metadata({ data: "json, name=VoiceId" })
  voiceId?: VoiceIdEnum;
}
