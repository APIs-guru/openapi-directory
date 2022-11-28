import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
import { Point } from "./point";
/**
 * Information about where an object (<a>DetectCustomLabels</a>) or text (<a>DetectText</a>) is located on an image.
**/
export declare class Geometry extends SpeakeasyBase {
    boundingBox?: BoundingBox;
    polygon?: Point[];
}
