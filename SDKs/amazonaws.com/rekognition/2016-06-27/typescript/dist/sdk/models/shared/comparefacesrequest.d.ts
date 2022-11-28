import { SpeakeasyBase } from "../../../internal/utils";
import { QualityFilterEnum } from "./qualityfilterenum";
import { Image } from "./image";
export declare class CompareFacesRequest extends SpeakeasyBase {
    qualityFilter?: QualityFilterEnum;
    similarityThreshold?: number;
    sourceImage: Image;
    targetImage: Image;
}
