import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateLoadBalancerTlsCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateAlternativeNames" })
  certificateAlternativeNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=certificateDomainName" })
  certificateDomainName: string;

  @SpeakeasyMetadata({ data: "json, name=certificateName" })
  certificateName: string;

  @SpeakeasyMetadata({ data: "json, name=loadBalancerName" })
  loadBalancerName: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
