import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CsvMappingParameters } from "./csvmappingparameters";
import { JsonMappingParameters } from "./jsonmappingparameters";


// MappingParameters
/** 
 * When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
**/
export class MappingParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=CSVMappingParameters" })
  csvMappingParameters?: CsvMappingParameters;

  @Metadata({ data: "json, name=JSONMappingParameters" })
  jsonMappingParameters?: JsonMappingParameters;
}
