import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountWithRestoreAccess } from "./accountwithrestoreaccess";
import { Tag } from "./tag";



// Snapshot
/** 
 * Describes a snapshot.
**/
export class Snapshot extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AccountWithRestoreAccess })
  accountsWithRestoreAccess?: AccountWithRestoreAccess[];

  @SpeakeasyMetadata()
  actualIncrementalBackupSizeInMegaBytes?: number;

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  backupProgressInMegaBytes?: number;

  @SpeakeasyMetadata()
  clusterCreateTime?: Date;

  @SpeakeasyMetadata()
  clusterIdentifier?: string;

  @SpeakeasyMetadata()
  clusterVersion?: string;

  @SpeakeasyMetadata()
  currentBackupRateInMegaBytesPerSecond?: number;

  @SpeakeasyMetadata()
  dbName?: string;

  @SpeakeasyMetadata()
  elapsedTimeInSeconds?: number;

  @SpeakeasyMetadata()
  encrypted?: boolean;

  @SpeakeasyMetadata()
  encryptedWithHsm?: boolean;

  @SpeakeasyMetadata()
  engineFullVersion?: string;

  @SpeakeasyMetadata()
  enhancedVpcRouting?: boolean;

  @SpeakeasyMetadata()
  estimatedSecondsToCompletion?: number;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  maintenanceTrackName?: string;

  @SpeakeasyMetadata()
  manualSnapshotRemainingDays?: number;

  @SpeakeasyMetadata()
  manualSnapshotRetentionPeriod?: number;

  @SpeakeasyMetadata()
  masterUsername?: string;

  @SpeakeasyMetadata()
  nodeType?: string;

  @SpeakeasyMetadata()
  numberOfNodes?: number;

  @SpeakeasyMetadata()
  ownerAccount?: string;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata()
  restorableNodeTypes?: string[];

  @SpeakeasyMetadata()
  snapshotCreateTime?: Date;

  @SpeakeasyMetadata()
  snapshotIdentifier?: string;

  @SpeakeasyMetadata()
  snapshotRetentionStartTime?: Date;

  @SpeakeasyMetadata()
  snapshotType?: string;

  @SpeakeasyMetadata()
  sourceRegion?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  totalBackupSizeInMegaBytes?: number;

  @SpeakeasyMetadata()
  vpcId?: string;
}
