import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JsonMappingParameters
/** 
 * Provides additional mapping information when JSON is the record format on the streaming source.
**/
export class JsonMappingParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RecordRowPath" })
  recordRowPath: string;
}
