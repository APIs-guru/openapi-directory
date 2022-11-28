import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancer } from "./loadbalancer";
export declare class GetLoadBalancersResult extends SpeakeasyBase {
    loadBalancers?: LoadBalancer[];
    nextPageToken?: string;
}
