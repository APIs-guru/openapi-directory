import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A vertex represents a 2D point in the image. The normalized vertex coordinates are between 0 to 1 fractions relative to the original plane (image, video). E.g. if the plane (e.g. whole image) would have size 10 x 20 then a point with normalized coordinates (0.1, 0.3) would be at the position (1, 6) on that plane.
**/
export declare class NormalizedVertex extends SpeakeasyBase {
    x?: number;
    y?: number;
}
