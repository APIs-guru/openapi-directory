import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLoadBalancerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=loadBalancerName" })
  loadBalancerName: string;
}
