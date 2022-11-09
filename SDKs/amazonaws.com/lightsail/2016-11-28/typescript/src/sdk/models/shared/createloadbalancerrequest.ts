import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { Tag } from "./tag";


export class CreateLoadBalancerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateAlternativeNames" })
  certificateAlternativeNames?: string[];

  @Metadata({ data: "json, name=certificateDomainName" })
  certificateDomainName?: string;

  @Metadata({ data: "json, name=certificateName" })
  certificateName?: string;

  @Metadata({ data: "json, name=healthCheckPath" })
  healthCheckPath?: string;

  @Metadata({ data: "json, name=instancePort" })
  instancePort: number;

  @Metadata({ data: "json, name=ipAddressType" })
  ipAddressType?: IpAddressTypeEnum;

  @Metadata({ data: "json, name=loadBalancerName" })
  loadBalancerName: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
