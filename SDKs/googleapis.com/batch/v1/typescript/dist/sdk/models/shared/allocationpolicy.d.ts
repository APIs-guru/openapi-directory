import { SpeakeasyBase } from "../../../internal/utils";
import { InstancePolicyOrTemplate } from "./instancepolicyortemplate";
import { LocationPolicy } from "./locationpolicy";
import { NetworkPolicy } from "./networkpolicy";
import { ServiceAccount } from "./serviceaccount";
/**
 * A Job's resource allocation policy describes when, where, and how compute resources should be allocated for the Job.
**/
export declare class AllocationPolicy extends SpeakeasyBase {
    instances?: InstancePolicyOrTemplate[];
    labels?: Map<string, string>;
    location?: LocationPolicy;
    network?: NetworkPolicy;
    serviceAccount?: ServiceAccount;
}
