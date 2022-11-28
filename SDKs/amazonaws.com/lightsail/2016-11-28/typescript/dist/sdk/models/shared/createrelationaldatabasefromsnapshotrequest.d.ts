import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateRelationalDatabaseFromSnapshotRequest extends SpeakeasyBase {
    availabilityZone?: string;
    publiclyAccessible?: boolean;
    relationalDatabaseBundleId?: string;
    relationalDatabaseName: string;
    relationalDatabaseSnapshotName?: string;
    restoreTime?: Date;
    sourceRelationalDatabaseName?: string;
    tags?: Tag[];
    useLatestRestorableTime?: boolean;
}
