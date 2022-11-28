import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AttachLoadBalancerTlsCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateName" })
  certificateName: string;

  @SpeakeasyMetadata({ data: "json, name=loadBalancerName" })
  loadBalancerName: string;
}
