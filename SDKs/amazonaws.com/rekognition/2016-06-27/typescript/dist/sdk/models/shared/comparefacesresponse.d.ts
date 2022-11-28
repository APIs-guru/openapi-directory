import { SpeakeasyBase } from "../../../internal/utils";
import { CompareFacesMatch } from "./comparefacesmatch";
import { ComparedSourceImageFace } from "./comparedsourceimageface";
import { OrientationCorrectionEnum } from "./orientationcorrectionenum";
import { ComparedFace } from "./comparedface";
export declare class CompareFacesResponse extends SpeakeasyBase {
    faceMatches?: CompareFacesMatch[];
    sourceImageFace?: ComparedSourceImageFace;
    sourceImageOrientationCorrection?: OrientationCorrectionEnum;
    targetImageOrientationCorrection?: OrientationCorrectionEnum;
    unmatchedFaces?: ComparedFace[];
}
