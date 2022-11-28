import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=addOns", elemType: AddOn })
  addOns?: AddOn[];

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=attachedTo" })
  attachedTo?: string;

  @SpeakeasyMetadata({ data: "json, name=attachmentState" })
  attachmentState?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=gbInUse" })
  gbInUse?: number;

  @SpeakeasyMetadata({ data: "json, name=iops" })
  iops?: number;

  @SpeakeasyMetadata({ data: "json, name=isAttached" })
  isAttached?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSystemDisk" })
  isSystemDisk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sizeInGb" })
  sizeInGb?: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: DiskStateEnum;

  @SpeakeasyMetadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
