import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LoadBalancer } from "./loadbalancer";


export class GetLoadBalancersResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=loadBalancers", elemType: shared.LoadBalancer })
  loadBalancers?: LoadBalancer[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
