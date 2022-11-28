import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedConcurrencyStatusEnumEnum } from "./provisionedconcurrencystatusenumenum";
export declare class GetProvisionedConcurrencyConfigResponse extends SpeakeasyBase {
    allocatedProvisionedConcurrentExecutions?: number;
    availableProvisionedConcurrentExecutions?: number;
    lastModified?: string;
    requestedProvisionedConcurrentExecutions?: number;
    status?: ProvisionedConcurrencyStatusEnumEnum;
    statusReason?: string;
}
