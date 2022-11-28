import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordColumn } from "./recordcolumn";
import { RecordFormat } from "./recordformat";



// SourceSchema
/** 
 * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
**/
export class SourceSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RecordColumns", elemType: RecordColumn })
  recordColumns: RecordColumn[];

  @SpeakeasyMetadata({ data: "json, name=RecordEncoding" })
  recordEncoding?: string;

  @SpeakeasyMetadata({ data: "json, name=RecordFormat" })
  recordFormat: RecordFormat;
}
