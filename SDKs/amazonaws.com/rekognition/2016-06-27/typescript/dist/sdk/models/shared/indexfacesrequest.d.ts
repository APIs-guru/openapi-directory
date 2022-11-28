import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeEnum } from "./attributeenum";
import { Image } from "./image";
import { QualityFilterEnum } from "./qualityfilterenum";
export declare class IndexFacesRequest extends SpeakeasyBase {
    collectionId: string;
    detectionAttributes?: AttributeEnum[];
    externalImageId?: string;
    image: Image;
    maxFaces?: number;
    qualityFilter?: QualityFilterEnum;
}
