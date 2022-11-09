import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JsonFileCompressionEnum } from "./jsonfilecompressionenum";


// JsonFormatDescriptor
/** 
 * Contains information about how a source JSON data file should be analyzed.
**/
export class JsonFormatDescriptor extends SpeakeasyBase {
  @Metadata({ data: "json, name=Charset" })
  charset?: string;

  @Metadata({ data: "json, name=FileCompression" })
  fileCompression?: JsonFileCompressionEnum;
}
