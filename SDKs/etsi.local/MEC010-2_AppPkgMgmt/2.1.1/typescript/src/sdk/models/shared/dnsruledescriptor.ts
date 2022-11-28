import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";



export class DnsRuleDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dnsRuleId: string;

  @SpeakeasyMetadata()
  domainName: string;

  @SpeakeasyMetadata()
  ipAddress: string;

  @SpeakeasyMetadata()
  ipAddressType: IpAddressTypeEnum;

  @SpeakeasyMetadata()
  ttl?: number;
}
