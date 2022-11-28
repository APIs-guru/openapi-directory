import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentClassifierEnum } from "./contentclassifierenum";



// HumanLoopDataAttributes
/** 
 * Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information and adult content. 
**/
export class HumanLoopDataAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentClassifiers" })
  contentClassifiers?: ContentClassifierEnum[];
}
