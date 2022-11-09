import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MappingParameters } from "./mappingparameters";
import { RecordFormatTypeEnum } from "./recordformattypeenum";


// RecordFormat
/** 
 *  For a SQL-based Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream. 
**/
export class RecordFormat extends SpeakeasyBase {
  @Metadata({ data: "json, name=MappingParameters" })
  mappingParameters?: MappingParameters;

  @Metadata({ data: "json, name=RecordFormatType" })
  recordFormatType: RecordFormatTypeEnum;
}
