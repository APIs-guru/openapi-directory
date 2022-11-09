import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EngineAttribute
/** 
 * A name and value pair that is specific to the engine of the server. 
**/
export class EngineAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
