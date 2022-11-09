import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AlwaysOnVpnPackage
/** 
 * Configuration for an always-on VPN connection.
**/
export class AlwaysOnVpnPackage extends SpeakeasyBase {
  @Metadata({ data: "json, name=lockdownEnabled" })
  lockdownEnabled?: boolean;

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;
}
