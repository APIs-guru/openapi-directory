import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StackSetOperationTypeEnum } from "./stacksetoperationtypeenum";


// UpdateProvisioningPreferences
/** 
 * The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types.
**/
export class UpdateProvisioningPreferences extends SpeakeasyBase {
  @Metadata({ data: "json, name=StackSetAccounts" })
  stackSetAccounts?: string[];

  @Metadata({ data: "json, name=StackSetFailureToleranceCount" })
  stackSetFailureToleranceCount?: number;

  @Metadata({ data: "json, name=StackSetFailureTolerancePercentage" })
  stackSetFailureTolerancePercentage?: number;

  @Metadata({ data: "json, name=StackSetMaxConcurrencyCount" })
  stackSetMaxConcurrencyCount?: number;

  @Metadata({ data: "json, name=StackSetMaxConcurrencyPercentage" })
  stackSetMaxConcurrencyPercentage?: number;

  @Metadata({ data: "json, name=StackSetOperationType" })
  stackSetOperationType?: StackSetOperationTypeEnum;

  @Metadata({ data: "json, name=StackSetRegions" })
  stackSetRegions?: string[];
}
