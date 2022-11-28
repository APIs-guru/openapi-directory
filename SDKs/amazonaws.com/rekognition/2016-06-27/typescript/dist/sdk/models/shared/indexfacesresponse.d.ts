import { SpeakeasyBase } from "../../../internal/utils";
import { FaceRecord } from "./facerecord";
import { OrientationCorrectionEnum } from "./orientationcorrectionenum";
import { UnindexedFace } from "./unindexedface";
export declare class IndexFacesResponse extends SpeakeasyBase {
    faceModelVersion?: string;
    faceRecords?: FaceRecord[];
    orientationCorrection?: OrientationCorrectionEnum;
    unindexedFaces?: UnindexedFace[];
}
