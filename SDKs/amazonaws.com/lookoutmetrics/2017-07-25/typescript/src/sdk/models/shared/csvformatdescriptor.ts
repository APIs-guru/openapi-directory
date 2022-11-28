import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CsvFileCompressionEnum } from "./csvfilecompressionenum";



// CsvFormatDescriptor
/** 
 * Contains information about how a source CSV data file should be analyzed.
**/
export class CsvFormatDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Charset" })
  charset?: string;

  @SpeakeasyMetadata({ data: "json, name=ContainsHeader" })
  containsHeader?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Delimiter" })
  delimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=FileCompression" })
  fileCompression?: CsvFileCompressionEnum;

  @SpeakeasyMetadata({ data: "json, name=HeaderList" })
  headerList?: string[];

  @SpeakeasyMetadata({ data: "json, name=QuoteSymbol" })
  quoteSymbol?: string;
}
