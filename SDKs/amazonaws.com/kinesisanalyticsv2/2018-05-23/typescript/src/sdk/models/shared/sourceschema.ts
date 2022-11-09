import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecordColumn } from "./recordcolumn";
import { RecordFormat } from "./recordformat";


// SourceSchema
/** 
 * For a SQL-based Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. 
**/
export class SourceSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=RecordColumns", elemType: shared.RecordColumn })
  recordColumns: RecordColumn[];

  @Metadata({ data: "json, name=RecordEncoding" })
  recordEncoding?: string;

  @Metadata({ data: "json, name=RecordFormat" })
  recordFormat: RecordFormat;
}
