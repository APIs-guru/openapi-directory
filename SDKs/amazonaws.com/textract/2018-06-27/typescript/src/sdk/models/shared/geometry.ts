import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
import { Point } from "./point";



// Geometry
/** 
 * Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements.
**/
export class Geometry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BoundingBox" })
  boundingBox?: BoundingBox;

  @SpeakeasyMetadata({ data: "json, name=Polygon", elemType: Point })
  polygon?: Point[];
}
