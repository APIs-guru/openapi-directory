import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a database bundle. A bundle describes the performance specifications of the database.
**/
export declare class RelationalDatabaseBundle extends SpeakeasyBase {
    bundleId?: string;
    cpuCount?: number;
    diskSizeInGb?: number;
    isActive?: boolean;
    isEncrypted?: boolean;
    name?: string;
    price?: number;
    ramSizeInGb?: number;
    transferPerMonthInGb?: number;
}
