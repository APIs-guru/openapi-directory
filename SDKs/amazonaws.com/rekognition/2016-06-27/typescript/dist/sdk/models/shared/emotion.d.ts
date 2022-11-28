import { SpeakeasyBase } from "../../../internal/utils";
import { EmotionNameEnum } from "./emotionnameenum";
/**
 * The emotions that appear to be expressed on the face, and the confidence level in the determination. The API is only making a determination of the physical appearance of a person's face. It is not a determination of the person’s internal emotional state and should not be used in such a way. For example, a person pretending to have a sad face might not be sad emotionally.
**/
export declare class Emotion extends SpeakeasyBase {
    confidence?: number;
    type?: EmotionNameEnum;
}
