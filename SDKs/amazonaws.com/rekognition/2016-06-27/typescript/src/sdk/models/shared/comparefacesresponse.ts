import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CompareFacesMatch } from "./comparefacesmatch";
import { ComparedSourceImageFace } from "./comparedsourceimageface";
import { OrientationCorrectionEnum } from "./orientationcorrectionenum";
import { OrientationCorrectionEnum } from "./orientationcorrectionenum";
import { ComparedFace } from "./comparedface";


export class CompareFacesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FaceMatches", elemType: shared.CompareFacesMatch })
  faceMatches?: CompareFacesMatch[];

  @Metadata({ data: "json, name=SourceImageFace" })
  sourceImageFace?: ComparedSourceImageFace;

  @Metadata({ data: "json, name=SourceImageOrientationCorrection" })
  sourceImageOrientationCorrection?: OrientationCorrectionEnum;

  @Metadata({ data: "json, name=TargetImageOrientationCorrection" })
  targetImageOrientationCorrection?: OrientationCorrectionEnum;

  @Metadata({ data: "json, name=UnmatchedFaces", elemType: shared.ComparedFace })
  unmatchedFaces?: ComparedFace[];
}
