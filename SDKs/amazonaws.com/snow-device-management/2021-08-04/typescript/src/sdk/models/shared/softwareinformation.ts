import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SoftwareInformation
/** 
 * Information about the software on the device.
**/
export class SoftwareInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=installState" })
  installState?: string;

  @Metadata({ data: "json, name=installedVersion" })
  installedVersion?: string;

  @Metadata({ data: "json, name=installingVersion" })
  installingVersion?: string;
}
