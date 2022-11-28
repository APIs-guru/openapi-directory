import { SpeakeasyBase } from "../../../internal/utils";
import { Face } from "./face";
import { FaceDetail } from "./facedetail";
/**
 * Object containing both the face metadata (stored in the backend database), and facial attributes that are detected but aren't stored in the database.
**/
export declare class FaceRecord extends SpeakeasyBase {
    face?: Face;
    faceDetail?: FaceDetail;
}
