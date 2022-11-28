import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActiveDirectoryComputerAttribute } from "./activedirectorycomputerattribute";



// ActiveDirectoryConfiguration
/** 
 * The configuration for a Microsoft Active Directory (Microsoft AD) studio resource.
**/
export class ActiveDirectoryConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computerAttributes", elemType: ActiveDirectoryComputerAttribute })
  computerAttributes?: ActiveDirectoryComputerAttribute[];

  @SpeakeasyMetadata({ data: "json, name=directoryId" })
  directoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationalUnitDistinguishedName" })
  organizationalUnitDistinguishedName?: string;
}
