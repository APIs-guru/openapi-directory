import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NormalizedVertex } from "./normalizedvertex";



// BoundingPoly
/** 
 * A bounding polygon of a detected object on a plane. On output both vertices and normalized_vertices are provided. The polygon is formed by connecting vertices in the order they are listed.
**/
export class BoundingPoly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=normalizedVertices", elemType: NormalizedVertex })
  normalizedVertices?: NormalizedVertex[];
}
