import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { Tag } from "./tag";



export class CreateLoadBalancerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateAlternativeNames" })
  certificateAlternativeNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=certificateDomainName" })
  certificateDomainName?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateName" })
  certificateName?: string;

  @SpeakeasyMetadata({ data: "json, name=healthCheckPath" })
  healthCheckPath?: string;

  @SpeakeasyMetadata({ data: "json, name=instancePort" })
  instancePort: number;

  @SpeakeasyMetadata({ data: "json, name=ipAddressType" })
  ipAddressType?: IpAddressTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=loadBalancerName" })
  loadBalancerName: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
