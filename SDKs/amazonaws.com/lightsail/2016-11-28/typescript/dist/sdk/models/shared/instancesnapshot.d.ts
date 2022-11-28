import { SpeakeasyBase } from "../../../internal/utils";
import { Disk } from "./disk";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { InstanceSnapshotStateEnum } from "./instancesnapshotstateenum";
import { Tag } from "./tag";
/**
 * Describes an instance snapshot.
**/
export declare class InstanceSnapshot extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    fromAttachedDisks?: Disk[];
    fromBlueprintId?: string;
    fromBundleId?: string;
    fromInstanceArn?: string;
    fromInstanceName?: string;
    isFromAutoSnapshot?: boolean;
    location?: ResourceLocation;
    name?: string;
    progress?: string;
    resourceType?: ResourceTypeEnum;
    sizeInGb?: number;
    state?: InstanceSnapshotStateEnum;
    supportCode?: string;
    tags?: Tag[];
}
