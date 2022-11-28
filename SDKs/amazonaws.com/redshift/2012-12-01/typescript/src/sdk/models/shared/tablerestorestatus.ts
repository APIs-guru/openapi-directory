import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableRestoreStatusTypeEnum } from "./tablerestorestatustypeenum";



// TableRestoreStatus
/** 
 * Describes the status of a <a>RestoreTableFromClusterSnapshot</a> operation.
**/
export class TableRestoreStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterIdentifier?: string;

  @SpeakeasyMetadata()
  message?: string;

  @SpeakeasyMetadata()
  newTableName?: string;

  @SpeakeasyMetadata()
  progressInMegaBytes?: number;

  @SpeakeasyMetadata()
  requestTime?: Date;

  @SpeakeasyMetadata()
  snapshotIdentifier?: string;

  @SpeakeasyMetadata()
  sourceDatabaseName?: string;

  @SpeakeasyMetadata()
  sourceSchemaName?: string;

  @SpeakeasyMetadata()
  sourceTableName?: string;

  @SpeakeasyMetadata()
  status?: TableRestoreStatusTypeEnum;

  @SpeakeasyMetadata()
  tableRestoreRequestId?: string;

  @SpeakeasyMetadata()
  targetDatabaseName?: string;

  @SpeakeasyMetadata()
  targetSchemaName?: string;

  @SpeakeasyMetadata()
  totalDataInMegaBytes?: number;
}
