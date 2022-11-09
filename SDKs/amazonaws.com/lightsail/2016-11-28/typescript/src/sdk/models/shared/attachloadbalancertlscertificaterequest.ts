import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AttachLoadBalancerTlsCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateName" })
  certificateName: string;

  @Metadata({ data: "json, name=loadBalancerName" })
  loadBalancerName: string;
}
