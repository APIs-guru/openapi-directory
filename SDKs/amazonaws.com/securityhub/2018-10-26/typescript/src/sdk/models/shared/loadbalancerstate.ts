import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoadBalancerState
/** 
 * Information about the state of the load balancer.
**/
export class LoadBalancerState extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Reason" })
  reason?: string;
}
