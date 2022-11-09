import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Celebrity } from "./celebrity";
import { OrientationCorrectionEnum } from "./orientationcorrectionenum";
import { ComparedFace } from "./comparedface";


export class RecognizeCelebritiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CelebrityFaces", elemType: shared.Celebrity })
  celebrityFaces?: Celebrity[];

  @Metadata({ data: "json, name=OrientationCorrection" })
  orientationCorrection?: OrientationCorrectionEnum;

  @Metadata({ data: "json, name=UnrecognizedFaces", elemType: shared.ComparedFace })
  unrecognizedFaces?: ComparedFace[];
}
