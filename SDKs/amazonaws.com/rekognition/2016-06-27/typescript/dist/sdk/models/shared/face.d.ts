import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
/**
 * Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned.
**/
export declare class Face extends SpeakeasyBase {
    boundingBox?: BoundingBox;
    confidence?: number;
    externalImageId?: string;
    faceId?: string;
    imageId?: string;
}
