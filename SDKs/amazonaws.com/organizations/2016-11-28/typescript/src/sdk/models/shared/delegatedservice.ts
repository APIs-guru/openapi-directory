import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DelegatedService
/** 
 * Contains information about the AWS service for which the account is a delegated administrator.
**/
export class DelegatedService extends SpeakeasyBase {
  @Metadata({ data: "json, name=DelegationEnabledDate" })
  delegationEnabledDate?: Date;

  @Metadata({ data: "json, name=ServicePrincipal" })
  servicePrincipal?: string;
}
