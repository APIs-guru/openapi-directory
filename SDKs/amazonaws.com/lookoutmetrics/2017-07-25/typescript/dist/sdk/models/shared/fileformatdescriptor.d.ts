import { SpeakeasyBase } from "../../../internal/utils";
import { CsvFormatDescriptor } from "./csvformatdescriptor";
import { JsonFormatDescriptor } from "./jsonformatdescriptor";
/**
 * Contains information about a source file's formatting.
**/
export declare class FileFormatDescriptor extends SpeakeasyBase {
    csvFormatDescriptor?: CsvFormatDescriptor;
    jsonFormatDescriptor?: JsonFormatDescriptor;
}
