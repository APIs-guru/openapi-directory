import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRdsDbClusterSnapshotDetails
/** 
 * Information about an Amazon RDS DB cluster snapshot.
**/
export class AwsRdsDbClusterSnapshotDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllocatedStorage" })
  allocatedStorage?: number;

  @SpeakeasyMetadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @SpeakeasyMetadata({ data: "json, name=ClusterCreateTime" })
  clusterCreateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=DbClusterIdentifier" })
  dbClusterIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=DbClusterSnapshotIdentifier" })
  dbClusterSnapshotIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=Engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=IamDatabaseAuthenticationEnabled" })
  iamDatabaseAuthenticationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseModel" })
  licenseModel?: string;

  @SpeakeasyMetadata({ data: "json, name=MasterUsername" })
  masterUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=PercentProgress" })
  percentProgress?: number;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=SnapshotCreateTime" })
  snapshotCreateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=SnapshotType" })
  snapshotType?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=StorageEncrypted" })
  storageEncrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
