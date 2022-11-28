import { SpeakeasyBase } from "../../../internal/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { Tag } from "./tag";
export declare class CreateLoadBalancerRequest extends SpeakeasyBase {
    certificateAlternativeNames?: string[];
    certificateDomainName?: string;
    certificateName?: string;
    healthCheckPath?: string;
    instancePort: number;
    ipAddressType?: IpAddressTypeEnum;
    loadBalancerName: string;
    tags?: Tag[];
}
