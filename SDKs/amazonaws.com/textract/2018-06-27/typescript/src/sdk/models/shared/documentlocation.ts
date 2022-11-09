import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Object } from "./s3object";


// DocumentLocation
/** 
 * <p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous operations such as <a>StartDocumentTextDetection</a>.</p> <p>The input document can be an image file in JPEG or PNG format. It can also be a file in PDF format.</p>
**/
export class DocumentLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Object" })
  s3Object?: S3Object;
}
