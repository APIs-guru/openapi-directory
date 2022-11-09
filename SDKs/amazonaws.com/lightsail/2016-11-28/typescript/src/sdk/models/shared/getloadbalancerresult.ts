import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoadBalancer } from "./loadbalancer";


export class GetLoadBalancerResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=loadBalancer" })
  loadBalancer?: LoadBalancer;
}
