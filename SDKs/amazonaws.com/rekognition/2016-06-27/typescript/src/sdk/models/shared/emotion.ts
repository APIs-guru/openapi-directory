import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmotionNameEnum } from "./emotionnameenum";


// Emotion
/** 
 * The emotions that appear to be expressed on the face, and the confidence level in the determination. The API is only making a determination of the physical appearance of a person's face. It is not a determination of the person’s internal emotional state and should not be used in such a way. For example, a person pretending to have a sad face might not be sad emotionally.
**/
export class Emotion extends SpeakeasyBase {
  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=Type" })
  type?: EmotionNameEnum;
}
