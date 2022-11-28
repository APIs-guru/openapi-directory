import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceSchema } from "./sourceschema";



// DiscoverInputSchemaResponse
/** 
 * <p/>
**/
export class DiscoverInputSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InputSchema" })
  inputSchema?: SourceSchema;

  @SpeakeasyMetadata({ data: "json, name=ParsedInputRecords" })
  parsedInputRecords?: string[][];

  @SpeakeasyMetadata({ data: "json, name=ProcessedInputRecords" })
  processedInputRecords?: string[];

  @SpeakeasyMetadata({ data: "json, name=RawInputRecords" })
  rawInputRecords?: string[];
}
