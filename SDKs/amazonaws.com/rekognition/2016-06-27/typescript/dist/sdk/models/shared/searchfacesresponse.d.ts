import { SpeakeasyBase } from "../../../internal/utils";
import { FaceMatch } from "./facematch";
export declare class SearchFacesResponse extends SpeakeasyBase {
    faceMatches?: FaceMatch[];
    faceModelVersion?: string;
    searchedFaceId?: string;
}
