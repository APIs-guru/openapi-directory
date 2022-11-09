import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecordColumn } from "./recordcolumn";
import { RecordFormat } from "./recordformat";


// InputSchemaUpdate
/** 
 * Describes updates for an SQL-based Kinesis Data Analytics application's input schema.
**/
export class InputSchemaUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=RecordColumnUpdates", elemType: shared.RecordColumn })
  recordColumnUpdates?: RecordColumn[];

  @Metadata({ data: "json, name=RecordEncodingUpdate" })
  recordEncodingUpdate?: string;

  @Metadata({ data: "json, name=RecordFormatUpdate" })
  recordFormatUpdate?: RecordFormat;
}
