import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CsvFormatDescriptor } from "./csvformatdescriptor";
import { JsonFormatDescriptor } from "./jsonformatdescriptor";


// FileFormatDescriptor
/** 
 * Contains information about a source file's formatting.
**/
export class FileFormatDescriptor extends SpeakeasyBase {
  @Metadata({ data: "json, name=CsvFormatDescriptor" })
  csvFormatDescriptor?: CsvFormatDescriptor;

  @Metadata({ data: "json, name=JsonFormatDescriptor" })
  jsonFormatDescriptor?: JsonFormatDescriptor;
}
