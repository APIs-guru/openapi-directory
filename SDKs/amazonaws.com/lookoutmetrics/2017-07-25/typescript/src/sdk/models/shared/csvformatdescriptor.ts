import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CsvFileCompressionEnum } from "./csvfilecompressionenum";


// CsvFormatDescriptor
/** 
 * Contains information about how a source CSV data file should be analyzed.
**/
export class CsvFormatDescriptor extends SpeakeasyBase {
  @Metadata({ data: "json, name=Charset" })
  charset?: string;

  @Metadata({ data: "json, name=ContainsHeader" })
  containsHeader?: boolean;

  @Metadata({ data: "json, name=Delimiter" })
  delimiter?: string;

  @Metadata({ data: "json, name=FileCompression" })
  fileCompression?: CsvFileCompressionEnum;

  @Metadata({ data: "json, name=HeaderList" })
  headerList?: string[];

  @Metadata({ data: "json, name=QuoteSymbol" })
  quoteSymbol?: string;
}
