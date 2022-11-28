import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LoadBalancerState
/** 
 * Information about the state of the load balancer.
**/
export class LoadBalancerState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason?: string;
}
