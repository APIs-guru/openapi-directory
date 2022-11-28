import { SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";
/**
 * Confusion matrix for multi-class classification models.
**/
export declare class ConfusionMatrix extends SpeakeasyBase {
    confidenceThreshold?: number;
    rows?: Row[];
}
