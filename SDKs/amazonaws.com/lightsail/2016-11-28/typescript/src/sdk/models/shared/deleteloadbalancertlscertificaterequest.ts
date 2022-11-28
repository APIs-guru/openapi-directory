import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLoadBalancerTlsCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateName" })
  certificateName: string;

  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "json, name=loadBalancerName" })
  loadBalancerName: string;
}
