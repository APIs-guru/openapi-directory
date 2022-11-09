import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Point
/** 
 * Point location in 2D in an image, where 0, 0 represents the top/left corner of the image
**/
export class Point extends SpeakeasyBase {
  @Metadata({ data: "json, name=X" })
  x?: number;

  @Metadata({ data: "json, name=Y" })
  y?: number;
}
