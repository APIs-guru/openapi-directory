import { SpeakeasyBase } from "../../../internal/utils";
import { AccessRules } from "./accessrules";
import { ResourceLocation } from "./resourcelocation";
import { ResourceReceivingAccess } from "./resourcereceivingaccess";
import { BucketState } from "./bucketstate";
import { Tag } from "./tag";
/**
 * Describes an Amazon Lightsail bucket.
**/
export declare class Bucket extends SpeakeasyBase {
    ableToUpdateBundle?: boolean;
    accessRules?: AccessRules;
    arn?: string;
    bundleId?: string;
    createdAt?: Date;
    location?: ResourceLocation;
    name?: string;
    objectVersioning?: string;
    readonlyAccessAccounts?: string[];
    resourceType?: string;
    resourcesReceivingAccess?: ResourceReceivingAccess[];
    state?: BucketState;
    supportCode?: string;
    tags?: Tag[];
    url?: string;
}
