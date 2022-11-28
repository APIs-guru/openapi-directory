import { SpeakeasyBase } from "../../../internal/utils";
import { TableRestoreStatusTypeEnum } from "./tablerestorestatustypeenum";
/**
 * Describes the status of a <a>RestoreTableFromClusterSnapshot</a> operation.
**/
export declare class TableRestoreStatus extends SpeakeasyBase {
    clusterIdentifier?: string;
    message?: string;
    newTableName?: string;
    progressInMegaBytes?: number;
    requestTime?: Date;
    snapshotIdentifier?: string;
    sourceDatabaseName?: string;
    sourceSchemaName?: string;
    sourceTableName?: string;
    status?: TableRestoreStatusTypeEnum;
    tableRestoreRequestId?: string;
    targetDatabaseName?: string;
    targetSchemaName?: string;
    totalDataInMegaBytes?: number;
}
