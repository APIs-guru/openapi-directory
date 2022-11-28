import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DomainMembership
/** 
 * An Active Directory Domain membership record associated with a DB instance.
**/
export class DomainMembership extends SpeakeasyBase {
  @SpeakeasyMetadata()
  domain?: string;

  @SpeakeasyMetadata()
  fqdn?: string;

  @SpeakeasyMetadata()
  iamRoleName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
