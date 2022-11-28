import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Disk } from "./disk";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { InstanceSnapshotStateEnum } from "./instancesnapshotstateenum";
import { Tag } from "./tag";



// InstanceSnapshot
/** 
 * Describes an instance snapshot.
**/
export class InstanceSnapshot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=fromAttachedDisks", elemType: Disk })
  fromAttachedDisks?: Disk[];

  @SpeakeasyMetadata({ data: "json, name=fromBlueprintId" })
  fromBlueprintId?: string;

  @SpeakeasyMetadata({ data: "json, name=fromBundleId" })
  fromBundleId?: string;

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
  state?: InstanceSnapshotStateEnum;

  @SpeakeasyMetadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
