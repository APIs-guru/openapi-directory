import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchFacesRequest extends SpeakeasyBase {
    collectionId: string;
    faceId: string;
    faceMatchThreshold?: number;
    maxFaces?: number;
}
