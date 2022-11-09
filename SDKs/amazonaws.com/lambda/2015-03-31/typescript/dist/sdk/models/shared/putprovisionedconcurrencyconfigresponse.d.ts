import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisionedConcurrencyStatusEnumEnum } from "./provisionedconcurrencystatusenumenum";
export declare class PutProvisionedConcurrencyConfigResponse extends SpeakeasyBase {
    allocatedProvisionedConcurrentExecutions?: number;
    availableProvisionedConcurrentExecutions?: number;
    lastModified?: string;
    requestedProvisionedConcurrentExecutions?: number;
    status?: ProvisionedConcurrencyStatusEnumEnum;
    statusReason?: string;
}
