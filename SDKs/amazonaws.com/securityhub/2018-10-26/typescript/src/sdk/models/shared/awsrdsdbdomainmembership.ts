import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRdsDbDomainMembership
/** 
 * Information about an Active Directory domain membership record associated with the DB instance.
**/
export class AwsRdsDbDomainMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=Domain" })
  domain?: string;

  @Metadata({ data: "json, name=Fqdn" })
  fqdn?: string;

  @Metadata({ data: "json, name=IamRoleName" })
  iamRoleName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
