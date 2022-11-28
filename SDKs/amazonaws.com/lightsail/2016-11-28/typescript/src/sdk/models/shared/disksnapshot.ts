import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { DiskSnapshotStateEnum } from "./disksnapshotstateenum";
import { Tag } from "./tag";



// DiskSnapshot
/** 
 * Describes a block storage disk snapshot.
**/
export class DiskSnapshot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=fromDiskArn" })
  fromDiskArn?: string;

  @SpeakeasyMetadata({ data: "json, name=fromDiskName" })
  fromDiskName?: string;

  @SpeakeasyMetadata({ data: "json, name=fromInstanceArn" })
  fromInstanceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=fromInstanceName" })
  fromInstanceName?: string;

  @SpeakeasyMetadata({ data: "json, name=isFromAutoSnapshot" })
  isFromAutoSnapshot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sizeInGb" })
  sizeInGb?: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: DiskSnapshotStateEnum;

  @SpeakeasyMetadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
