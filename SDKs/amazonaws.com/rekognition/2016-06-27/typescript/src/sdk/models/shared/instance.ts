import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BoundingBox } from "./boundingbox";


// Instance
/** 
 * An instance of a label returned by Amazon Rekognition Image (<a>DetectLabels</a>) or by Amazon Rekognition Video (<a>GetLabelDetection</a>).
**/
export class Instance extends SpeakeasyBase {
  @Metadata({ data: "json, name=BoundingBox" })
  boundingBox?: BoundingBox;

  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;
}
