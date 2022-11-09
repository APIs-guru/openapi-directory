import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AttachInstancesToLoadBalancerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceNames" })
  instanceNames: string[];

  @Metadata({ data: "json, name=loadBalancerName" })
  loadBalancerName: string;
}
