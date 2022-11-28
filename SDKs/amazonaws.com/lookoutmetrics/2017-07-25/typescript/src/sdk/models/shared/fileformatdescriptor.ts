import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CsvFormatDescriptor } from "./csvformatdescriptor";
import { JsonFormatDescriptor } from "./jsonformatdescriptor";



// FileFormatDescriptor
/** 
 * Contains information about a source file's formatting.
**/
export class FileFormatDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CsvFormatDescriptor" })
  csvFormatDescriptor?: CsvFormatDescriptor;

  @SpeakeasyMetadata({ data: "json, name=JsonFormatDescriptor" })
  jsonFormatDescriptor?: JsonFormatDescriptor;
}
