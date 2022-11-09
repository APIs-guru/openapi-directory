import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FaceRecord } from "./facerecord";
import { OrientationCorrectionEnum } from "./orientationcorrectionenum";
import { UnindexedFace } from "./unindexedface";


export class IndexFacesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FaceModelVersion" })
  faceModelVersion?: string;

  @Metadata({ data: "json, name=FaceRecords", elemType: shared.FaceRecord })
  faceRecords?: FaceRecord[];

  @Metadata({ data: "json, name=OrientationCorrection" })
  orientationCorrection?: OrientationCorrectionEnum;

  @Metadata({ data: "json, name=UnindexedFaces", elemType: shared.UnindexedFace })
  unindexedFaces?: UnindexedFace[];
}
