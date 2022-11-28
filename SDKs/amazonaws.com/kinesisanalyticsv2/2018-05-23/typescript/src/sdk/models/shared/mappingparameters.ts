import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CsvMappingParameters } from "./csvmappingparameters";
import { JsonMappingParameters } from "./jsonmappingparameters";



// MappingParameters
/** 
 * When you configure a SQL-based Kinesis Data Analytics application's input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
**/
export class MappingParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CSVMappingParameters" })
  csvMappingParameters?: CsvMappingParameters;

  @SpeakeasyMetadata({ data: "json, name=JSONMappingParameters" })
  jsonMappingParameters?: JsonMappingParameters;
}
