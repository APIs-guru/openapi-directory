import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JsonFileCompressionEnum } from "./jsonfilecompressionenum";



// JsonFormatDescriptor
/** 
 * Contains information about how a source JSON data file should be analyzed.
**/
export class JsonFormatDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Charset" })
  charset?: string;

  @SpeakeasyMetadata({ data: "json, name=FileCompression" })
  fileCompression?: JsonFileCompressionEnum;
}
