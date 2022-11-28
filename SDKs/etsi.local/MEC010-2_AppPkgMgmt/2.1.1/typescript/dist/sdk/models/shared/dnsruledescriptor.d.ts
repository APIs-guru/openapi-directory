import { SpeakeasyBase } from "../../../internal/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
export declare class DnsRuleDescriptor extends SpeakeasyBase {
    dnsRuleId: string;
    domainName: string;
    ipAddress: string;
    ipAddressType: IpAddressTypeEnum;
    ttl?: number;
}
