import { SpeakeasyBase } from "../../../internal/utils";
import { NormalizedVertex } from "./normalizedvertex";
/**
 * A bounding polygon of a detected object on a plane. On output both vertices and normalized_vertices are provided. The polygon is formed by connecting vertices in the order they are listed.
**/
export declare class BoundingPoly extends SpeakeasyBase {
    normalizedVertices?: NormalizedVertex[];
}
