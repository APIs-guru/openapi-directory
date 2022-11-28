import { SpeakeasyBase } from "../../../internal/utils";
import { LandmarkTypeEnum } from "./landmarktypeenum";
/**
 * Indicates the location of the landmark on the face.
**/
export declare class Landmark extends SpeakeasyBase {
    type?: LandmarkTypeEnum;
    x?: number;
    y?: number;
}
