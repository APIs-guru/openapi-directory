import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRdsDbDomainMembership
/** 
 * Information about an Active Directory domain membership record associated with the DB instance.
**/
export class AwsRdsDbDomainMembership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=Fqdn" })
  fqdn?: string;

  @SpeakeasyMetadata({ data: "json, name=IamRoleName" })
  iamRoleName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
