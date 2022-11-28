import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DelegatedService
/** 
 * Contains information about the AWS service for which the account is a delegated administrator.
**/
export class DelegatedService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DelegationEnabledDate" })
  delegationEnabledDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ServicePrincipal" })
  servicePrincipal?: string;
}
