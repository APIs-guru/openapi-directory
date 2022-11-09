import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FaceDetail } from "./facedetail";
import { OrientationCorrectionEnum } from "./orientationcorrectionenum";


export class DetectFacesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FaceDetails", elemType: shared.FaceDetail })
  faceDetails?: FaceDetail[];

  @Metadata({ data: "json, name=OrientationCorrection" })
  orientationCorrection?: OrientationCorrectionEnum;
}
