import { SpeakeasyBase } from "../../../internal/utils";
import { AddOn } from "./addon";
import { InstanceHardware } from "./instancehardware";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { ResourceLocation } from "./resourcelocation";
import { InstanceNetworking } from "./instancenetworking";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { InstanceState } from "./instancestate";
import { Tag } from "./tag";
/**
 * Describes an instance (a virtual private server).
**/
export declare class Instance extends SpeakeasyBase {
    addOns?: AddOn[];
    arn?: string;
    blueprintId?: string;
    blueprintName?: string;
    bundleId?: string;
    createdAt?: Date;
    hardware?: InstanceHardware;
    ipAddressType?: IpAddressTypeEnum;
    ipv6Addresses?: string[];
    isStaticIp?: boolean;
    location?: ResourceLocation;
    name?: string;
    networking?: InstanceNetworking;
    privateIpAddress?: string;
    publicIpAddress?: string;
    resourceType?: ResourceTypeEnum;
    sshKeyName?: string;
    state?: InstanceState;
    supportCode?: string;
    tags?: Tag[];
    username?: string;
}
