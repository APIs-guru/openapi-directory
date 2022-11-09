import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OperatingSystemConfigurationManager } from "./operatingsystemconfigurationmanager";


// OperatingSystem
/** 
 * Describes supported operating systems in AWS OpsWorks Stacks.
**/
export class OperatingSystem extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationManagers", elemType: shared.OperatingSystemConfigurationManager })
  configurationManagers?: OperatingSystemConfigurationManager[];

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ReportedName" })
  reportedName?: string;

  @Metadata({ data: "json, name=ReportedVersion" })
  reportedVersion?: string;

  @Metadata({ data: "json, name=Supported" })
  supported?: boolean;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
