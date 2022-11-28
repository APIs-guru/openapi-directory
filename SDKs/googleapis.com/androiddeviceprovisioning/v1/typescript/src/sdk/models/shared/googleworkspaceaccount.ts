import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleWorkspaceAccount
/** 
 * A Google Workspace customer.
**/
export class GoogleWorkspaceAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=preProvisioningTokens" })
  preProvisioningTokens?: string[];
}


// GoogleWorkspaceAccountInput
/** 
 * A Google Workspace customer.
**/
export class GoogleWorkspaceAccountInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;
}
