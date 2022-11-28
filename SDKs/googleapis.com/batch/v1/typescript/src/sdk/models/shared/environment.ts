import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Environment
/** 
 * An Environment describes a collection of environment variables to set when executing Tasks.
**/
export class Environment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=variables" })
  variables?: Map<string, string>;
}
