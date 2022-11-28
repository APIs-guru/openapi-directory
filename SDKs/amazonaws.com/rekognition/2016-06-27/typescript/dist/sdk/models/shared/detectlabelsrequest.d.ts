import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
export declare class DetectLabelsRequest extends SpeakeasyBase {
    image: Image;
    maxLabels?: number;
    minConfidence?: number;
}
