import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateRelationalDatabaseRequest extends SpeakeasyBase {
    availabilityZone?: string;
    masterDatabaseName: string;
    masterUserPassword?: string;
    masterUsername: string;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    publiclyAccessible?: boolean;
    relationalDatabaseBlueprintId: string;
    relationalDatabaseBundleId: string;
    relationalDatabaseName: string;
    tags?: Tag[];
}
