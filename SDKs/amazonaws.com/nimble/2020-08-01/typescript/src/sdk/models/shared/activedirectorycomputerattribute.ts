import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActiveDirectoryComputerAttribute
/** 
 * An LDAP attribute of an Active Directory computer account, in the form of a name:value pair.
**/
export class ActiveDirectoryComputerAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
