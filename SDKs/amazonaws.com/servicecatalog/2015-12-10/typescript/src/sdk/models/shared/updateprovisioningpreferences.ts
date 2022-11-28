import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StackSetOperationTypeEnum } from "./stacksetoperationtypeenum";



// UpdateProvisioningPreferences
/** 
 * The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types.
**/
export class UpdateProvisioningPreferences extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=StackSetOperationType" })
  stackSetOperationType?: StackSetOperationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=StackSetRegions" })
  stackSetRegions?: string[];
}
