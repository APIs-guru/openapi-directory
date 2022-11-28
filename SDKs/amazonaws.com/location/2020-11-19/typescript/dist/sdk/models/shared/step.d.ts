import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Represents an element of a leg within a route. A step contains instructions for how to move to the next step in the leg.
**/
export declare class Step extends SpeakeasyBase {
    distance: number;
    durationSeconds: number;
    endPosition: number[];
    geometryOffset?: number;
    startPosition: number[];
}
