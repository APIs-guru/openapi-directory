import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FaceDetail } from "./facedetail";
import { OrientationCorrectionEnum } from "./orientationcorrectionenum";



export class DetectFacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FaceDetails", elemType: FaceDetail })
  faceDetails?: FaceDetail[];

  @SpeakeasyMetadata({ data: "json, name=OrientationCorrection" })
  orientationCorrection?: OrientationCorrectionEnum;
}
