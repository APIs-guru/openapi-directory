import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3ContentLocation } from "./s3contentlocation";



// CodeContent
/** 
 * Specifies either the application code, or the location of the application code, for a Flink-based Kinesis Data Analytics application. 
**/
export class CodeContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3ContentLocation" })
  s3ContentLocation?: S3ContentLocation;

  @SpeakeasyMetadata({ data: "json, name=TextContent" })
  textContent?: string;

  @SpeakeasyMetadata({ data: "json, name=ZipFileContent" })
  zipFileContent?: string;
}
