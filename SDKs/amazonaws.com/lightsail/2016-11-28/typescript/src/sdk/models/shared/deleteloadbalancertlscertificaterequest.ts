import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLoadBalancerTlsCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateName" })
  certificateName: string;

  @Metadata({ data: "json, name=force" })
  force?: boolean;

  @Metadata({ data: "json, name=loadBalancerName" })
  loadBalancerName: string;
}
