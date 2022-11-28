import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MappingParameters } from "./mappingparameters";
import { RecordFormatTypeEnum } from "./recordformattypeenum";



// RecordFormat
/** 
 *  Describes the record format and relevant mapping information that should be applied to schematize the records on the stream. 
**/
export class RecordFormat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MappingParameters" })
  mappingParameters?: MappingParameters;

  @SpeakeasyMetadata({ data: "json, name=RecordFormatType" })
  recordFormatType: RecordFormatTypeEnum;
}
