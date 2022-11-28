import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancer } from "./loadbalancer";



export class GetLoadBalancersResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=loadBalancers", elemType: LoadBalancer })
  loadBalancers?: LoadBalancer[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
