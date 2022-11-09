import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLoadBalancerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=loadBalancerName" })
  loadBalancerName: string;
}
