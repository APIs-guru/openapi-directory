import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SoftwareInformation
/** 
 * Information about the software on the device.
**/
export class SoftwareInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=installState" })
  installState?: string;

  @SpeakeasyMetadata({ data: "json, name=installedVersion" })
  installedVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=installingVersion" })
  installingVersion?: string;
}
