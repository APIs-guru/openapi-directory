import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=fromAttachedDisks", elemType: shared.Disk })
  fromAttachedDisks?: Disk[];

  @Metadata({ data: "json, name=fromBlueprintId" })
  fromBlueprintId?: string;

  @Metadata({ data: "json, name=fromBundleId" })
  fromBundleId?: string;

  @Metadata({ data: "json, name=fromInstanceArn" })
  fromInstanceArn?: string;

  @Metadata({ data: "json, name=fromInstanceName" })
  fromInstanceName?: string;

  @Metadata({ data: "json, name=isFromAutoSnapshot" })
  isFromAutoSnapshot?: boolean;

  @Metadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=progress" })
  progress?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @Metadata({ data: "json, name=sizeInGb" })
  sizeInGb?: number;

  @Metadata({ data: "json, name=state" })
  state?: InstanceSnapshotStateEnum;

  @Metadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
