import { SpeakeasyBase } from "../../../internal/utils";
import { FaceDetail } from "./facedetail";
import { ReasonEnum } from "./reasonenum";
/**
 * A face that <a>IndexFaces</a> detected, but didn't index. Use the <code>Reasons</code> response attribute to determine why a face wasn't indexed.
**/
export declare class UnindexedFace extends SpeakeasyBase {
    faceDetail?: FaceDetail;
    reasons?: ReasonEnum[];
}
