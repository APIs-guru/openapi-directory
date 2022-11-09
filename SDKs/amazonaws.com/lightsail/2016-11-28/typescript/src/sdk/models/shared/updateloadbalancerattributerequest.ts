import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoadBalancerAttributeNameEnum } from "./loadbalancerattributenameenum";


export class UpdateLoadBalancerAttributeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeName" })
  attributeName: LoadBalancerAttributeNameEnum;

  @Metadata({ data: "json, name=attributeValue" })
  attributeValue: string;

  @Metadata({ data: "json, name=loadBalancerName" })
  loadBalancerName: string;
}
