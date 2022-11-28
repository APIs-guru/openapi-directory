import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";
/**
 * Describes an SSH key pair.
**/
export declare class KeyPair extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    fingerprint?: string;
    location?: ResourceLocation;
    name?: string;
    resourceType?: ResourceTypeEnum;
    supportCode?: string;
    tags?: Tag[];
}
