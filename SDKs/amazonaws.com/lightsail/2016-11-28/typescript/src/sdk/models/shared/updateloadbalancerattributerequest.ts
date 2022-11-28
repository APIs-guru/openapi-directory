import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerAttributeNameEnum } from "./loadbalancerattributenameenum";



export class UpdateLoadBalancerAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeName" })
  attributeName: LoadBalancerAttributeNameEnum;

  @SpeakeasyMetadata({ data: "json, name=attributeValue" })
  attributeValue: string;

  @SpeakeasyMetadata({ data: "json, name=loadBalancerName" })
  loadBalancerName: string;
}
