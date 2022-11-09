import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StackConfigurationManager
/** 
 * Describes the configuration manager.
**/
export class StackConfigurationManager extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
