import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActiveDirectoryComputerAttribute } from "./activedirectorycomputerattribute";


// ActiveDirectoryConfiguration
/** 
 * The configuration for a Microsoft Active Directory (Microsoft AD) studio resource.
**/
export class ActiveDirectoryConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=computerAttributes", elemType: shared.ActiveDirectoryComputerAttribute })
  computerAttributes?: ActiveDirectoryComputerAttribute[];

  @Metadata({ data: "json, name=directoryId" })
  directoryId?: string;

  @Metadata({ data: "json, name=organizationalUnitDistinguishedName" })
  organizationalUnitDistinguishedName?: string;
}
