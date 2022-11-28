import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
import { Point } from "./point";



// Geometry
/** 
 * Information about where an object (<a>DetectCustomLabels</a>) or text (<a>DetectText</a>) is located on an image.
**/
export class Geometry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BoundingBox" })
  boundingBox?: BoundingBox;

  @SpeakeasyMetadata({ data: "json, name=Polygon", elemType: Point })
  polygon?: Point[];
}
