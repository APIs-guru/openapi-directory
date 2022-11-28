import { SpeakeasyBase } from "../../../internal/utils";
import { ContentClassifierEnum } from "./contentclassifierenum";
/**
 * Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information.
**/
export declare class HumanLoopDataAttributes extends SpeakeasyBase {
    contentClassifiers?: ContentClassifierEnum[];
}
