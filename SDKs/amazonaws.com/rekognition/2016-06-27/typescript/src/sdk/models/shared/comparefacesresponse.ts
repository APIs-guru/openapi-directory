import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompareFacesMatch } from "./comparefacesmatch";
import { ComparedSourceImageFace } from "./comparedsourceimageface";
import { OrientationCorrectionEnum } from "./orientationcorrectionenum";
import { ComparedFace } from "./comparedface";



export class CompareFacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FaceMatches", elemType: CompareFacesMatch })
  faceMatches?: CompareFacesMatch[];

  @SpeakeasyMetadata({ data: "json, name=SourceImageFace" })
  sourceImageFace?: ComparedSourceImageFace;

  @SpeakeasyMetadata({ data: "json, name=SourceImageOrientationCorrection" })
  sourceImageOrientationCorrection?: OrientationCorrectionEnum;

  @SpeakeasyMetadata({ data: "json, name=TargetImageOrientationCorrection" })
  targetImageOrientationCorrection?: OrientationCorrectionEnum;

  @SpeakeasyMetadata({ data: "json, name=UnmatchedFaces", elemType: ComparedFace })
  unmatchedFaces?: ComparedFace[];
}
