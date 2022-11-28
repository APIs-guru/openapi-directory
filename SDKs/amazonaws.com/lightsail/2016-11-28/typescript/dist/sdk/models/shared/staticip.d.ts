import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * Describes a static IP.
**/
export declare class StaticIp extends SpeakeasyBase {
    arn?: string;
    attachedTo?: string;
    createdAt?: Date;
    ipAddress?: string;
    isAttached?: boolean;
    location?: ResourceLocation;
    name?: string;
    resourceType?: ResourceTypeEnum;
    supportCode?: string;
}
