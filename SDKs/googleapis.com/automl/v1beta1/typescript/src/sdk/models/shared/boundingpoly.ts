import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NormalizedVertex } from "./normalizedvertex";


// BoundingPoly
/** 
 * A bounding polygon of a detected object on a plane. On output both vertices and normalized_vertices are provided. The polygon is formed by connecting vertices in the order they are listed.
**/
export class BoundingPoly extends SpeakeasyBase {
  @Metadata({ data: "json, name=normalizedVertices", elemType: shared.NormalizedVertex })
  normalizedVertices?: NormalizedVertex[];
}
