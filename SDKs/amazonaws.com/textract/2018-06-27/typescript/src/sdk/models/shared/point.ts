import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Point
/** 
 * <p>The X and Y coordinates of a point on a document page. The X and Y values that are returned are ratios of the overall document page size. For example, if the input document is 700 x 200 and the operation returns X=0.5 and Y=0.25, then the point is at the (350,50) pixel coordinate on the document page.</p> <p>An array of <code>Point</code> objects, <code>Polygon</code>, is returned by <a>DetectDocumentText</a>. <code>Polygon</code> represents a fine-grained polygon around detected text. For more information, see Geometry in the Amazon Textract Developer Guide. </p>
**/
export class Point extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=X" })
  x?: number;

  @SpeakeasyMetadata({ data: "json, name=Y" })
  y?: number;
}
