import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StackSetOperationTypeEnum } from "./stacksetoperationtypeenum";
/**
 * The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types.
**/
export declare class UpdateProvisioningPreferences extends SpeakeasyBase {
    stackSetAccounts?: string[];
    stackSetFailureToleranceCount?: number;
    stackSetFailureTolerancePercentage?: number;
    stackSetMaxConcurrencyCount?: number;
    stackSetMaxConcurrencyPercentage?: number;
    stackSetOperationType?: StackSetOperationTypeEnum;
    stackSetRegions?: string[];
}
