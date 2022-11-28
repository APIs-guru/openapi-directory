import { SpeakeasyBase } from "../../../internal/utils";
import { EngineEnum } from "./engineenum";
import { LanguageCodeEnum } from "./languagecodeenum";
import { OutputFormatEnum } from "./outputformatenum";
import { SpeechMarkTypeEnum } from "./speechmarktypeenum";
import { TaskStatusEnum } from "./taskstatusenum";
import { TextTypeEnum } from "./texttypeenum";
import { VoiceIdEnum } from "./voiceidenum";
/**
 * SynthesisTask object that provides information about a speech synthesis task.
**/
export declare class SynthesisTask extends SpeakeasyBase {
    creationTime?: Date;
    engine?: EngineEnum;
    languageCode?: LanguageCodeEnum;
    lexiconNames?: string[];
    outputFormat?: OutputFormatEnum;
    outputUri?: string;
    requestCharacters?: number;
    sampleRate?: string;
    snsTopicArn?: string;
    speechMarkTypes?: SpeechMarkTypeEnum[];
    taskId?: string;
    taskStatus?: TaskStatusEnum;
    taskStatusReason?: string;
    textType?: TextTypeEnum;
    voiceId?: VoiceIdEnum;
}
