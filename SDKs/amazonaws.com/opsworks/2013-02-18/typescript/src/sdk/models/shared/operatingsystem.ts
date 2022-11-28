import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemConfigurationManager } from "./operatingsystemconfigurationmanager";



// OperatingSystem
/** 
 * Describes supported operating systems in AWS OpsWorks Stacks.
**/
export class OperatingSystem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationManagers", elemType: OperatingSystemConfigurationManager })
  configurationManagers?: OperatingSystemConfigurationManager[];

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ReportedName" })
  reportedName?: string;

  @SpeakeasyMetadata({ data: "json, name=ReportedVersion" })
  reportedVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Supported" })
  supported?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
