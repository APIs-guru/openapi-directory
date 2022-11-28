import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OperatingSystemConfigurationManager
/** 
 * A block that contains information about the configuration manager (Chef) and the versions of the configuration manager that are supported for an operating system.
**/
export class OperatingSystemConfigurationManager extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
