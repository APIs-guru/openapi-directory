import { SpeakeasyBase } from "../../../internal/utils";
import { ComparedFace } from "./comparedface";
/**
 * Provides information about a face in a target image that matches the source image face analyzed by <code>CompareFaces</code>. The <code>Face</code> property contains the bounding box of the face in the target image. The <code>Similarity</code> property is the confidence that the source image face matches the face in the bounding box.
**/
export declare class CompareFacesMatch extends SpeakeasyBase {
    face?: ComparedFace;
    similarity?: number;
}
