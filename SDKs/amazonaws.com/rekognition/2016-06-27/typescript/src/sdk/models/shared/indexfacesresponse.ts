import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FaceRecord } from "./facerecord";
import { OrientationCorrectionEnum } from "./orientationcorrectionenum";
import { UnindexedFace } from "./unindexedface";



export class IndexFacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FaceModelVersion" })
  faceModelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=FaceRecords", elemType: FaceRecord })
  faceRecords?: FaceRecord[];

  @SpeakeasyMetadata({ data: "json, name=OrientationCorrection" })
  orientationCorrection?: OrientationCorrectionEnum;

  @SpeakeasyMetadata({ data: "json, name=UnindexedFaces", elemType: UnindexedFace })
  unindexedFaces?: UnindexedFace[];
}
