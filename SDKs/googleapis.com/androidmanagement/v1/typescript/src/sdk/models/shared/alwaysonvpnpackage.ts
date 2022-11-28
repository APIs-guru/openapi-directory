import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AlwaysOnVpnPackage
/** 
 * Configuration for an always-on VPN connection.
**/
export class AlwaysOnVpnPackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lockdownEnabled" })
  lockdownEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;
}
