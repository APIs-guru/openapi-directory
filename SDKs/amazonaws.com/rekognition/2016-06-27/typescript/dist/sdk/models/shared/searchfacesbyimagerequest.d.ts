import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { QualityFilterEnum } from "./qualityfilterenum";
export declare class SearchFacesByImageRequest extends SpeakeasyBase {
    collectionId: string;
    faceMatchThreshold?: number;
    image: Image;
    maxFaces?: number;
    qualityFilter?: QualityFilterEnum;
}
