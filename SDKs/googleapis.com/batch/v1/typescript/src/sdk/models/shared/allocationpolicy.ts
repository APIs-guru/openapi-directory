import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstancePolicyOrTemplate } from "./instancepolicyortemplate";
import { LocationPolicy } from "./locationpolicy";
import { NetworkPolicy } from "./networkpolicy";
import { ServiceAccount } from "./serviceaccount";



// AllocationPolicy
/** 
 * A Job's resource allocation policy describes when, where, and how compute resources should be allocated for the Job.
**/
export class AllocationPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instances", elemType: InstancePolicyOrTemplate })
  instances?: InstancePolicyOrTemplate[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: LocationPolicy;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: NetworkPolicy;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: ServiceAccount;
}
