import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// DbClusterSnapshot
/** 
 * <p>Contains the details for an Amazon RDS DB cluster snapshot </p> <p>This data type is used as a response element in the <code>DescribeDBClusterSnapshots</code> action. </p>
**/
export class DbClusterSnapshot extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocatedStorage?: number;

  @SpeakeasyMetadata()
  availabilityZones?: string[];

  @SpeakeasyMetadata()
  clusterCreateTime?: Date;

  @SpeakeasyMetadata()
  dbClusterIdentifier?: string;

  @SpeakeasyMetadata()
  dbClusterSnapshotArn?: string;

  @SpeakeasyMetadata()
  dbClusterSnapshotIdentifier?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineMode?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  iamDatabaseAuthenticationEnabled?: boolean;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  licenseModel?: string;

  @SpeakeasyMetadata()
  masterUsername?: string;

  @SpeakeasyMetadata()
  percentProgress?: number;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata()
  snapshotCreateTime?: Date;

  @SpeakeasyMetadata()
  snapshotType?: string;

  @SpeakeasyMetadata()
  sourceDbClusterSnapshotArn?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  storageEncrypted?: boolean;

  @SpeakeasyMetadata({ elemType: Tag })
  tagList?: Tag[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
