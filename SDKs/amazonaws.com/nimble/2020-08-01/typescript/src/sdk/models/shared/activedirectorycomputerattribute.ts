import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActiveDirectoryComputerAttribute
/** 
 * An LDAP attribute of an Active Directory computer account, in the form of a name:value pair.
**/
export class ActiveDirectoryComputerAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
