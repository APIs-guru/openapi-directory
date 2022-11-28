import { SpeakeasyBase } from "../../../internal/utils";
import { FaceMatch } from "./facematch";
import { BoundingBox } from "./boundingbox";
export declare class SearchFacesByImageResponse extends SpeakeasyBase {
    faceMatches?: FaceMatch[];
    faceModelVersion?: string;
    searchedFaceBoundingBox?: BoundingBox;
    searchedFaceConfidence?: number;
}
