import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EngineAttribute
/** 
 * A name and value pair that is specific to the engine of the server. 
**/
export class EngineAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
