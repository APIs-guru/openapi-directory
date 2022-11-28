import { SpeakeasyBase } from "../../../internal/utils";
import { Face } from "./face";
/**
 * Provides face metadata. In addition, it also provides the confidence in the match of this face with the input face.
**/
export declare class FaceMatch extends SpeakeasyBase {
    face?: Face;
    similarity?: number;
}
