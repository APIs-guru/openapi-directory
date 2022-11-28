import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";
/**
 * Describes a database snapshot.
**/
export declare class RelationalDatabaseSnapshot extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    engine?: string;
    engineVersion?: string;
    fromRelationalDatabaseArn?: string;
    fromRelationalDatabaseBlueprintId?: string;
    fromRelationalDatabaseBundleId?: string;
    fromRelationalDatabaseName?: string;
    location?: ResourceLocation;
    name?: string;
    resourceType?: ResourceTypeEnum;
    sizeInGb?: number;
    state?: string;
    supportCode?: string;
    tags?: Tag[];
}
