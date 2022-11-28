import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerAttributeNameEnum } from "./loadbalancerattributenameenum";
export declare class UpdateLoadBalancerAttributeRequest extends SpeakeasyBase {
    attributeName: LoadBalancerAttributeNameEnum;
    attributeValue: string;
    loadBalancerName: string;
}
