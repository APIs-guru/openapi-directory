import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LegGeometry
/** 
 * Contains the geometry details for each path between a pair of positions. Used in plotting a route leg on a map.
**/
export class LegGeometry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LineString" })
  lineString?: number[][];
}
