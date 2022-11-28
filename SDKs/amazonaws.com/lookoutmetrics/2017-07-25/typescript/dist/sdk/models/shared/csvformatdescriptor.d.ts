import { SpeakeasyBase } from "../../../internal/utils";
import { CsvFileCompressionEnum } from "./csvfilecompressionenum";
/**
 * Contains information about how a source CSV data file should be analyzed.
**/
export declare class CsvFormatDescriptor extends SpeakeasyBase {
    charset?: string;
    containsHeader?: boolean;
    delimiter?: string;
    fileCompression?: CsvFileCompressionEnum;
    headerList?: string[];
    quoteSymbol?: string;
}
