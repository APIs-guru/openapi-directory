import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
import { Point } from "./point";
/**
 * Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements.
**/
export declare class Geometry extends SpeakeasyBase {
    boundingBox?: BoundingBox;
    polygon?: Point[];
}
