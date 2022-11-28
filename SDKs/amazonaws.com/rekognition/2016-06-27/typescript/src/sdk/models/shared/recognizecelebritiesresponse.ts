import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Celebrity } from "./celebrity";
import { OrientationCorrectionEnum } from "./orientationcorrectionenum";
import { ComparedFace } from "./comparedface";



export class RecognizeCelebritiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CelebrityFaces", elemType: Celebrity })
  celebrityFaces?: Celebrity[];

  @SpeakeasyMetadata({ data: "json, name=OrientationCorrection" })
  orientationCorrection?: OrientationCorrectionEnum;

  @SpeakeasyMetadata({ data: "json, name=UnrecognizedFaces", elemType: ComparedFace })
  unrecognizedFaces?: ComparedFace[];
}
