import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContentClassifierEnum } from "./contentclassifierenum";


// LabelingJobDataAttributes
/** 
 * Attributes of the data specified by the customer. Use these to describe the data to be labeled.
**/
export class LabelingJobDataAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContentClassifiers" })
  contentClassifiers?: ContentClassifierEnum[];
}
