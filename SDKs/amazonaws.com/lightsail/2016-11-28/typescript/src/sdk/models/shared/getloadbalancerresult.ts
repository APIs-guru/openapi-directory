import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancer } from "./loadbalancer";



export class GetLoadBalancerResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=loadBalancer" })
  loadBalancer?: LoadBalancer;
}
