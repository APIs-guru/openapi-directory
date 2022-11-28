import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { DiskSnapshotStateEnum } from "./disksnapshotstateenum";
import { Tag } from "./tag";
/**
 * Describes a block storage disk snapshot.
**/
export declare class DiskSnapshot extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    fromDiskArn?: string;
    fromDiskName?: string;
    fromInstanceArn?: string;
    fromInstanceName?: string;
    isFromAutoSnapshot?: boolean;
    location?: ResourceLocation;
    name?: string;
    progress?: string;
    resourceType?: ResourceTypeEnum;
    sizeInGb?: number;
    state?: DiskSnapshotStateEnum;
    supportCode?: string;
    tags?: Tag[];
}
