import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StackConfigurationManager
/** 
 * Describes the configuration manager.
**/
export class StackConfigurationManager extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
