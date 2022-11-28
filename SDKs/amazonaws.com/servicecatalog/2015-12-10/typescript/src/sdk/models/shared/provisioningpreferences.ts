import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProvisioningPreferences
/** 
 * <p>The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product type</p> <p>One or more AWS accounts that will have access to the provisioned product.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>The AWS accounts specified should be within the list of accounts in the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p> <p>If no values are specified, the default value is all accounts from the <code>STACKSET</code> constraint.</p>
**/
export class ProvisioningPreferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StackSetAccounts" })
  stackSetAccounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=StackSetFailureToleranceCount" })
  stackSetFailureToleranceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=StackSetFailureTolerancePercentage" })
  stackSetFailureTolerancePercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=StackSetMaxConcurrencyCount" })
  stackSetMaxConcurrencyCount?: number;

  @SpeakeasyMetadata({ data: "json, name=StackSetMaxConcurrencyPercentage" })
  stackSetMaxConcurrencyPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=StackSetRegions" })
  stackSetRegions?: string[];
}
