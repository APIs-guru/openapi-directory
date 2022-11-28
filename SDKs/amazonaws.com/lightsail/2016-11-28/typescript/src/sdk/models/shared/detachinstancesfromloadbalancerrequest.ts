import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DetachInstancesFromLoadBalancerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceNames" })
  instanceNames: string[];

  @SpeakeasyMetadata({ data: "json, name=loadBalancerName" })
  loadBalancerName: string;
}
