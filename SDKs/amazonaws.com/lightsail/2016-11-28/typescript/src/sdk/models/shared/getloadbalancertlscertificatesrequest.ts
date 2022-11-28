import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLoadBalancerTlsCertificatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=loadBalancerName" })
  loadBalancerName: string;
}
