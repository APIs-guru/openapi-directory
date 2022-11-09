import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=addOns", elemType: shared.AddOn })
  addOns?: AddOn[];

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=blueprintId" })
  blueprintId?: string;

  @Metadata({ data: "json, name=blueprintName" })
  blueprintName?: string;

  @Metadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=hardware" })
  hardware?: InstanceHardware;

  @Metadata({ data: "json, name=ipAddressType" })
  ipAddressType?: IpAddressTypeEnum;

  @Metadata({ data: "json, name=ipv6Addresses" })
  ipv6Addresses?: string[];

  @Metadata({ data: "json, name=isStaticIp" })
  isStaticIp?: boolean;

  @Metadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networking" })
  networking?: InstanceNetworking;

  @Metadata({ data: "json, name=privateIpAddress" })
  privateIpAddress?: string;

  @Metadata({ data: "json, name=publicIpAddress" })
  publicIpAddress?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @Metadata({ data: "json, name=sshKeyName" })
  sshKeyName?: string;

  @Metadata({ data: "json, name=state" })
  state?: InstanceState;

  @Metadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=username" })
  username?: string;
}
