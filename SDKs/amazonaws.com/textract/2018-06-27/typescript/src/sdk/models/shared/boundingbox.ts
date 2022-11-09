import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BoundingBox
/** 
 * <p>The bounding box around the detected page, text, key-value pair, table, table cell, or selection element on a document page. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates that represent the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall document page size. For example, if the input image is 700 x 200 pixels, and the top-left coordinate of the bounding box is 350 x 50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall document page dimension. For example, if the document page size is 700 x 200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p>
**/
export class BoundingBox extends SpeakeasyBase {
  @Metadata({ data: "json, name=Height" })
  height?: number;

  @Metadata({ data: "json, name=Left" })
  left?: number;

  @Metadata({ data: "json, name=Top" })
  top?: number;

  @Metadata({ data: "json, name=Width" })
  width?: number;
}
