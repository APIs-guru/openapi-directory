import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLoadBalancerTlsCertificatesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=loadBalancerName" })
  loadBalancerName: string;
}
