import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContentClassifierEnum } from "./contentclassifierenum";


// HumanLoopDataAttributes
/** 
 * Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information.
**/
export class HumanLoopDataAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContentClassifiers" })
  contentClassifiers?: ContentClassifierEnum[];
}
