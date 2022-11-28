import { SpeakeasyBase } from "../../../internal/utils";
import { ContentClassifierEnum } from "./contentclassifierenum";
/**
 * Attributes of the data specified by the customer. Use these to describe the data to be labeled.
**/
export declare class LabelingJobDataAttributes extends SpeakeasyBase {
    contentClassifiers?: ContentClassifierEnum[];
}
