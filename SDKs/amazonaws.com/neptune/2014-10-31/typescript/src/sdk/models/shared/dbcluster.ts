import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterRole } from "./dbclusterrole";
import { DbClusterMember } from "./dbclustermember";
import { DbClusterOptionGroupStatus } from "./dbclusteroptiongroupstatus";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";



// DbCluster
/** 
 * <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
**/
export class DbCluster extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocatedStorage?: number;

  @SpeakeasyMetadata({ elemType: DbClusterRole })
  associatedRoles?: DbClusterRole[];

  @SpeakeasyMetadata()
  automaticRestartTime?: Date;

  @SpeakeasyMetadata()
  availabilityZones?: string[];

  @SpeakeasyMetadata()
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata()
  characterSetName?: string;

  @SpeakeasyMetadata()
  cloneGroupId?: string;

  @SpeakeasyMetadata()
  clusterCreateTime?: Date;

  @SpeakeasyMetadata()
  copyTagsToSnapshot?: boolean;

  @SpeakeasyMetadata()
  crossAccountClone?: boolean;

  @SpeakeasyMetadata()
  dbClusterArn?: string;

  @SpeakeasyMetadata()
  dbClusterIdentifier?: string;

  @SpeakeasyMetadata({ elemType: DbClusterMember })
  dbClusterMembers?: DbClusterMember[];

  @SpeakeasyMetadata({ elemType: DbClusterOptionGroupStatus })
  dbClusterOptionGroupMemberships?: DbClusterOptionGroupStatus[];

  @SpeakeasyMetadata()
  dbClusterParameterGroup?: string;

  @SpeakeasyMetadata()
  dbSubnetGroup?: string;

  @SpeakeasyMetadata()
  databaseName?: string;

  @SpeakeasyMetadata()
  dbClusterResourceId?: string;

  @SpeakeasyMetadata()
  deletionProtection?: boolean;

  @SpeakeasyMetadata()
  earliestRestorableTime?: Date;

  @SpeakeasyMetadata()
  enabledCloudwatchLogsExports?: string[];

  @SpeakeasyMetadata()
  endpoint?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  hostedZoneId?: string;

  @SpeakeasyMetadata()
  iamDatabaseAuthenticationEnabled?: boolean;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  latestRestorableTime?: Date;

  @SpeakeasyMetadata()
  masterUsername?: string;

  @SpeakeasyMetadata()
  multiAz?: boolean;

  @SpeakeasyMetadata()
  percentProgress?: string;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata()
  preferredBackupWindow?: string;

  @SpeakeasyMetadata()
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata()
  readReplicaIdentifiers?: string[];

  @SpeakeasyMetadata()
  readerEndpoint?: string;

  @SpeakeasyMetadata()
  replicationSourceIdentifier?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  storageEncrypted?: boolean;

  @SpeakeasyMetadata({ elemType: VpcSecurityGroupMembership })
  vpcSecurityGroups?: VpcSecurityGroupMembership[];
}
