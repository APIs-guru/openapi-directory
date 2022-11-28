import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerTlsCertificate } from "./loadbalancertlscertificate";



export class GetLoadBalancerTlsCertificatesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tlsCertificates", elemType: LoadBalancerTlsCertificate })
  tlsCertificates?: LoadBalancerTlsCertificate[];
}
