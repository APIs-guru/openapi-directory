import { SpeakeasyBase } from "../../../internal/utils";
import { AddOn } from "./addon";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { DiskStateEnum } from "./diskstateenum";
import { Tag } from "./tag";
/**
 * Describes a block storage disk.
**/
export declare class Disk extends SpeakeasyBase {
    addOns?: AddOn[];
    arn?: string;
    attachedTo?: string;
    attachmentState?: string;
    createdAt?: Date;
    gbInUse?: number;
    iops?: number;
    isAttached?: boolean;
    isSystemDisk?: boolean;
    location?: ResourceLocation;
    name?: string;
    path?: string;
    resourceType?: ResourceTypeEnum;
    sizeInGb?: number;
    state?: DiskStateEnum;
    supportCode?: string;
    tags?: Tag[];
}
