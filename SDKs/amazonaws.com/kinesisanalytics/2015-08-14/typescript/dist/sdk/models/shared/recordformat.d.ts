import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MappingParameters } from "./mappingparameters";
import { RecordFormatTypeEnum } from "./recordformattypeenum";
/**
 *  Describes the record format and relevant mapping information that should be applied to schematize the records on the stream.
**/
export declare class RecordFormat extends SpeakeasyBase {
    mappingParameters?: MappingParameters;
    recordFormatType: RecordFormatTypeEnum;
}
