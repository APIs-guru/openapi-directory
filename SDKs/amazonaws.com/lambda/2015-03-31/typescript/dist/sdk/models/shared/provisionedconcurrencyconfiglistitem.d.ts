import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisionedConcurrencyStatusEnumEnum } from "./provisionedconcurrencystatusenumenum";
/**
 * Details about the provisioned concurrency configuration for a function alias or version.
**/
export declare class ProvisionedConcurrencyConfigListItem extends SpeakeasyBase {
    allocatedProvisionedConcurrentExecutions?: number;
    availableProvisionedConcurrentExecutions?: number;
    functionArn?: string;
    lastModified?: string;
    requestedProvisionedConcurrentExecutions?: number;
    status?: ProvisionedConcurrencyStatusEnumEnum;
    statusReason?: string;
}
