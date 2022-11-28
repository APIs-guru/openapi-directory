import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
import { FaceDetail } from "./facedetail";
/**
 * Information about a recognized celebrity.
**/
export declare class CelebrityDetail extends SpeakeasyBase {
    boundingBox?: BoundingBox;
    confidence?: number;
    face?: FaceDetail;
    id?: string;
    name?: string;
    urls?: string[];
}
