import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateLoadBalancerTlsCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateAlternativeNames" })
  certificateAlternativeNames?: string[];

  @Metadata({ data: "json, name=certificateDomainName" })
  certificateDomainName: string;

  @Metadata({ data: "json, name=certificateName" })
  certificateName: string;

  @Metadata({ data: "json, name=loadBalancerName" })
  loadBalancerName: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
