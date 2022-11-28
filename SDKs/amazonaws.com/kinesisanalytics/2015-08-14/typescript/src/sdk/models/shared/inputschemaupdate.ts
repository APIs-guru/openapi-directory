import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordColumn } from "./recordcolumn";
import { RecordFormat } from "./recordformat";



// InputSchemaUpdate
/** 
 * Describes updates for the application's input schema.
**/
export class InputSchemaUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RecordColumnUpdates", elemType: RecordColumn })
  recordColumnUpdates?: RecordColumn[];

  @SpeakeasyMetadata({ data: "json, name=RecordEncodingUpdate" })
  recordEncodingUpdate?: string;

  @SpeakeasyMetadata({ data: "json, name=RecordFormatUpdate" })
  recordFormatUpdate?: RecordFormat;
}
