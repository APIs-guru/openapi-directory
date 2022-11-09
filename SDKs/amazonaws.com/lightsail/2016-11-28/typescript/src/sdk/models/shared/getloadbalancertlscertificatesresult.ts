import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LoadBalancerTlsCertificate } from "./loadbalancertlscertificate";


export class GetLoadBalancerTlsCertificatesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=tlsCertificates", elemType: shared.LoadBalancerTlsCertificate })
  tlsCertificates?: LoadBalancerTlsCertificate[];
}
