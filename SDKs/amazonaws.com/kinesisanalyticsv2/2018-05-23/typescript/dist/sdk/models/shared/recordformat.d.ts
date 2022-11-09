import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MappingParameters } from "./mappingparameters";
import { RecordFormatTypeEnum } from "./recordformattypeenum";
/**
 *  For a SQL-based Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream.
**/
export declare class RecordFormat extends SpeakeasyBase {
    mappingParameters?: MappingParameters;
    recordFormatType: RecordFormatTypeEnum;
}
