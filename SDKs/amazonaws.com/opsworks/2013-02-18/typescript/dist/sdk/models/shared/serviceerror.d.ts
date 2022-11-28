import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an AWS OpsWorks Stacks service error.
**/
export declare class ServiceError extends SpeakeasyBase {
    createdAt?: string;
    instanceId?: string;
    message?: string;
    serviceErrorId?: string;
    stackId?: string;
    type?: string;
}
