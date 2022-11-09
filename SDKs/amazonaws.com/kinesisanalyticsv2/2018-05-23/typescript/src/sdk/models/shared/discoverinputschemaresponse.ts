import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceSchema } from "./sourceschema";


export class DiscoverInputSchemaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=InputSchema" })
  inputSchema?: SourceSchema;

  @Metadata({ data: "json, name=ParsedInputRecords" })
  parsedInputRecords?: string[][];

  @Metadata({ data: "json, name=ProcessedInputRecords" })
  processedInputRecords?: string[];

  @Metadata({ data: "json, name=RawInputRecords" })
  rawInputRecords?: string[];
}
