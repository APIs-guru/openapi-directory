import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Point
/** 
 * Point location in 2D in an image, where 0, 0 represents the top/left corner of the image
**/
export class Point extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=X" })
  x?: number;

  @SpeakeasyMetadata({ data: "json, name=Y" })
  y?: number;
}
