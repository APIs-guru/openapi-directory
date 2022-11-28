import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddOn } from "./addon";
import { InstanceHardware } from "./instancehardware";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { ResourceLocation } from "./resourcelocation";
import { InstanceNetworking } from "./instancenetworking";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { InstanceState } from "./instancestate";
import { Tag } from "./tag";



// Instance
/** 
 * Describes an instance (a virtual private server).
**/
export class Instance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addOns", elemType: AddOn })
  addOns?: AddOn[];

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=blueprintId" })
  blueprintId?: string;

  @SpeakeasyMetadata({ data: "json, name=blueprintName" })
  blueprintName?: string;

  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=hardware" })
  hardware?: InstanceHardware;

  @SpeakeasyMetadata({ data: "json, name=ipAddressType" })
  ipAddressType?: IpAddressTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ipv6Addresses" })
  ipv6Addresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=isStaticIp" })
  isStaticIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networking" })
  networking?: InstanceNetworking;

  @SpeakeasyMetadata({ data: "json, name=privateIpAddress" })
  privateIpAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=publicIpAddress" })
  publicIpAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sshKeyName" })
  sshKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: InstanceState;

  @SpeakeasyMetadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
