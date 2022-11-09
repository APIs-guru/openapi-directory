import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OperatingSystemConfigurationManager
/** 
 * A block that contains information about the configuration manager (Chef) and the versions of the configuration manager that are supported for an operating system.
**/
export class OperatingSystemConfigurationManager extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
