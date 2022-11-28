import { SpeakeasyBase } from "../../../internal/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
export declare class SetIpAddressTypeRequest extends SpeakeasyBase {
    ipAddressType: IpAddressTypeEnum;
    resourceName: string;
    resourceType: ResourceTypeEnum;
}
