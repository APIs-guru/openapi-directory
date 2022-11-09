import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BoundingBox
/** 
 * <p>Identifies the bounding box around the label, face, text or personal protective equipment. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note>
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
