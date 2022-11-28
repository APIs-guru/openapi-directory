import { SpeakeasyBase } from "../../../internal/utils";
import { Celebrity } from "./celebrity";
import { OrientationCorrectionEnum } from "./orientationcorrectionenum";
import { ComparedFace } from "./comparedface";
export declare class RecognizeCelebritiesResponse extends SpeakeasyBase {
    celebrityFaces?: Celebrity[];
    orientationCorrection?: OrientationCorrectionEnum;
    unrecognizedFaces?: ComparedFace[];
}
