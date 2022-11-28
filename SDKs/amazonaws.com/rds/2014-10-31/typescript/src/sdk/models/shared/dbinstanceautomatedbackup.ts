import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbInstanceAutomatedBackupsReplication } from "./dbinstanceautomatedbackupsreplication";
import { RestoreWindow } from "./restorewindow";



// DbInstanceAutomatedBackup
/** 
 * An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that existed at the time you deleted the source instance.
**/
export class DbInstanceAutomatedBackup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocatedStorage?: number;

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata()
  dbInstanceArn?: string;

  @SpeakeasyMetadata()
  dbInstanceAutomatedBackupsArn?: string;

  @SpeakeasyMetadata({ elemType: DbInstanceAutomatedBackupsReplication })
  dbInstanceAutomatedBackupsReplications?: DbInstanceAutomatedBackupsReplication[];

  @SpeakeasyMetadata()
  dbInstanceIdentifier?: string;

  @SpeakeasyMetadata()
  dbiResourceId?: string;

  @SpeakeasyMetadata()
  encrypted?: boolean;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  iamDatabaseAuthenticationEnabled?: boolean;

  @SpeakeasyMetadata()
  instanceCreateTime?: Date;

  @SpeakeasyMetadata()
  iops?: number;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  licenseModel?: string;

  @SpeakeasyMetadata()
  masterUsername?: string;

  @SpeakeasyMetadata()
  optionGroupName?: string;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata()
  region?: string;

  @SpeakeasyMetadata()
  restoreWindow?: RestoreWindow;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  storageType?: string;

  @SpeakeasyMetadata()
  tdeCredentialArn?: string;

  @SpeakeasyMetadata()
  timezone?: string;

  @SpeakeasyMetadata()
  vpcId?: string;
}
