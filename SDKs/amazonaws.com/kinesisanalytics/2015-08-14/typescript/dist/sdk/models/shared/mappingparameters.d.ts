import { SpeakeasyBase } from "../../../internal/utils";
import { CsvMappingParameters } from "./csvmappingparameters";
import { JsonMappingParameters } from "./jsonmappingparameters";
/**
 * When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
**/
export declare class MappingParameters extends SpeakeasyBase {
    csvMappingParameters?: CsvMappingParameters;
    jsonMappingParameters?: JsonMappingParameters;
}
