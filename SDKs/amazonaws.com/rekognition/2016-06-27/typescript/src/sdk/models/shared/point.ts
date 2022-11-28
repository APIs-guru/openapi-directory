import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Point
/** 
 * <p>The X and Y coordinates of a point on an image. The X and Y values returned are ratios of the overall image size. For example, if the input image is 700x200 and the operation returns X=0.5 and Y=0.25, then the point is at the (350,50) pixel coordinate on the image.</p> <p>An array of <code>Point</code> objects, <code>Polygon</code>, is returned by <a>DetectText</a> and by <a>DetectCustomLabels</a>. <code>Polygon</code> represents a fine-grained polygon around a detected item. For more information, see Geometry in the Amazon Rekognition Developer Guide. </p>
**/
export class Point extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=X" })
  x?: number;

  @SpeakeasyMetadata({ data: "json, name=Y" })
  y?: number;
}
