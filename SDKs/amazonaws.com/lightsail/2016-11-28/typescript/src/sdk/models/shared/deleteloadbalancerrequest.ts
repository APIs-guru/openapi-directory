import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLoadBalancerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=loadBalancerName" })
  loadBalancerName: string;
}
