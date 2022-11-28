import { SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";
import { OrientationCorrectionEnum } from "./orientationcorrectionenum";
export declare class DetectLabelsResponse extends SpeakeasyBase {
    labelModelVersion?: string;
    labels?: Label[];
    orientationCorrection?: OrientationCorrectionEnum;
}
