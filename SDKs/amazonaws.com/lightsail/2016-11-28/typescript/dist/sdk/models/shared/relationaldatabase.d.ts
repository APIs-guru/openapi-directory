import { SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabaseHardware } from "./relationaldatabasehardware";
import { ResourceLocation } from "./resourcelocation";
import { RelationalDatabaseEndpoint } from "./relationaldatabaseendpoint";
import { PendingMaintenanceAction } from "./pendingmaintenanceaction";
import { PendingModifiedRelationalDatabaseValues } from "./pendingmodifiedrelationaldatabasevalues";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";
/**
 * Describes a database.
**/
export declare class RelationalDatabase extends SpeakeasyBase {
    arn?: string;
    backupRetentionEnabled?: boolean;
    caCertificateIdentifier?: string;
    createdAt?: Date;
    engine?: string;
    engineVersion?: string;
    hardware?: RelationalDatabaseHardware;
    latestRestorableTime?: Date;
    location?: ResourceLocation;
    masterDatabaseName?: string;
    masterEndpoint?: RelationalDatabaseEndpoint;
    masterUsername?: string;
    name?: string;
    parameterApplyStatus?: string;
    pendingMaintenanceActions?: PendingMaintenanceAction[];
    pendingModifiedValues?: PendingModifiedRelationalDatabaseValues;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    publiclyAccessible?: boolean;
    relationalDatabaseBlueprintId?: string;
    relationalDatabaseBundleId?: string;
    resourceType?: ResourceTypeEnum;
    secondaryAvailabilityZone?: string;
    state?: string;
    supportCode?: string;
    tags?: Tag[];
}
