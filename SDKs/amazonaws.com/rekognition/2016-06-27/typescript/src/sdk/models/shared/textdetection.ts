import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Geometry } from "./geometry";
import { TextTypesEnum } from "./texttypesenum";


// TextDetection
/** 
 * <p>Information about a word or line of text detected by <a>DetectText</a>.</p> <p>The <code>DetectedText</code> field contains the text that Amazon Rekognition detected in the image. </p> <p>Every word and line has an identifier (<code>Id</code>). Each word belongs to a line and has a parent identifier (<code>ParentId</code>) that identifies the line of text in which the word appears. The word <code>Id</code> is also an index for the word within a line of words. </p> <p>For more information, see Detecting Text in the Amazon Rekognition Developer Guide.</p>
**/
export class TextDetection extends SpeakeasyBase {
  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=DetectedText" })
  detectedText?: string;

  @Metadata({ data: "json, name=Geometry" })
  geometry?: Geometry;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=ParentId" })
  parentId?: number;

  @Metadata({ data: "json, name=Type" })
  type?: TextTypesEnum;
}
