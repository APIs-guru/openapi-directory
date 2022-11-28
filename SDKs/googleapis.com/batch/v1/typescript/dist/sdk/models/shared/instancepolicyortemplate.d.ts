import { SpeakeasyBase } from "../../../internal/utils";
import { InstancePolicy } from "./instancepolicy";
/**
 * Either an InstancePolicy or an instance template.
**/
export declare class InstancePolicyOrTemplate extends SpeakeasyBase {
    installGpuDrivers?: boolean;
    instanceTemplate?: string;
    policy?: InstancePolicy;
}
