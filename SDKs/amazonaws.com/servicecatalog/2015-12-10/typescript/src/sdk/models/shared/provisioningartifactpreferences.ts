import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProvisioningArtifactPreferences
/** 
 * <p>The user-defined preferences that will be applied during product provisioning, unless overridden by <code>ProvisioningPreferences</code> or <code>UpdateProvisioningPreferences</code>.</p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a> in the <i>AWS CloudFormation User Guide</i>.</p>
**/
export class ProvisioningArtifactPreferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StackSetAccounts" })
  stackSetAccounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=StackSetRegions" })
  stackSetRegions?: string[];
}
