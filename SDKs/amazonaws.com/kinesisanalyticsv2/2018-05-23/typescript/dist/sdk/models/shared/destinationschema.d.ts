import { SpeakeasyBase } from "../../../internal/utils";
import { RecordFormatTypeEnum } from "./recordformattypeenum";
/**
 * Describes the data format when records are written to the destination in a SQL-based Kinesis Data Analytics application.
**/
export declare class DestinationSchema extends SpeakeasyBase {
    recordFormatType: RecordFormatTypeEnum;
}
