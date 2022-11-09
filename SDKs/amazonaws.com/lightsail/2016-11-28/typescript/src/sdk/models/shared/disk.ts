import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AddOn } from "./addon";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { DiskStateEnum } from "./diskstateenum";
import { Tag } from "./tag";


// Disk
/** 
 * Describes a block storage disk.
**/
export class Disk extends SpeakeasyBase {
  @Metadata({ data: "json, name=addOns", elemType: shared.AddOn })
  addOns?: AddOn[];

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=attachedTo" })
  attachedTo?: string;

  @Metadata({ data: "json, name=attachmentState" })
  attachmentState?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=gbInUse" })
  gbInUse?: number;

  @Metadata({ data: "json, name=iops" })
  iops?: number;

  @Metadata({ data: "json, name=isAttached" })
  isAttached?: boolean;

  @Metadata({ data: "json, name=isSystemDisk" })
  isSystemDisk?: boolean;

  @Metadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @Metadata({ data: "json, name=sizeInGb" })
  sizeInGb?: number;

  @Metadata({ data: "json, name=state" })
  state?: DiskStateEnum;

  @Metadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
