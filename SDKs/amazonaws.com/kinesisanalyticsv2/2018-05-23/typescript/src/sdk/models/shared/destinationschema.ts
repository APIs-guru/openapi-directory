import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordFormatTypeEnum } from "./recordformattypeenum";



// DestinationSchema
/** 
 * Describes the data format when records are written to the destination in a SQL-based Kinesis Data Analytics application. 
**/
export class DestinationSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RecordFormatType" })
  recordFormatType: RecordFormatTypeEnum;
}
