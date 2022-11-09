import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BoundingBox } from "./boundingbox";
import { Point } from "./point";


// Geometry
/** 
 * Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements.
**/
export class Geometry extends SpeakeasyBase {
  @Metadata({ data: "json, name=BoundingBox" })
  boundingBox?: BoundingBox;

  @Metadata({ data: "json, name=Polygon", elemType: shared.Point })
  polygon?: Point[];
}
