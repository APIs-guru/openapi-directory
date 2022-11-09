import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRdsDbClusterSnapshotDetails
/** 
 * Information about an Amazon RDS DB cluster snapshot.
**/
export class AwsRdsDbClusterSnapshotDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllocatedStorage" })
  allocatedStorage?: number;

  @Metadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @Metadata({ data: "json, name=ClusterCreateTime" })
  clusterCreateTime?: string;

  @Metadata({ data: "json, name=DbClusterIdentifier" })
  dbClusterIdentifier?: string;

  @Metadata({ data: "json, name=DbClusterSnapshotIdentifier" })
  dbClusterSnapshotIdentifier?: string;

  @Metadata({ data: "json, name=Engine" })
  engine?: string;

  @Metadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "json, name=IamDatabaseAuthenticationEnabled" })
  iamDatabaseAuthenticationEnabled?: boolean;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=LicenseModel" })
  licenseModel?: string;

  @Metadata({ data: "json, name=MasterUsername" })
  masterUsername?: string;

  @Metadata({ data: "json, name=PercentProgress" })
  percentProgress?: number;

  @Metadata({ data: "json, name=Port" })
  port?: number;

  @Metadata({ data: "json, name=SnapshotCreateTime" })
  snapshotCreateTime?: string;

  @Metadata({ data: "json, name=SnapshotType" })
  snapshotType?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=StorageEncrypted" })
  storageEncrypted?: boolean;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
