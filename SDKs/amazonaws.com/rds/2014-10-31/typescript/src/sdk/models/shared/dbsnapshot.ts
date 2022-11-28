import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessorFeature } from "./processorfeature";
import { Tag } from "./tag";



// DbSnapshot
/** 
 * <p>Contains the details of an Amazon RDS DB snapshot. </p> <p>This data type is used as a response element in the <code>DescribeDBSnapshots</code> action. </p>
**/
export class DbSnapshot extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocatedStorage?: number;

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  dbInstanceIdentifier?: string;

  @SpeakeasyMetadata()
  dbSnapshotArn?: string;

  @SpeakeasyMetadata()
  dbSnapshotIdentifier?: string;

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
  originalSnapshotCreateTime?: Date;

  @SpeakeasyMetadata()
  percentProgress?: number;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata({ elemType: ProcessorFeature })
  processorFeatures?: ProcessorFeature[];

  @SpeakeasyMetadata()
  snapshotCreateTime?: Date;

  @SpeakeasyMetadata()
  snapshotType?: string;

  @SpeakeasyMetadata()
  sourceDbSnapshotIdentifier?: string;

  @SpeakeasyMetadata()
  sourceRegion?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  storageType?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tagList?: Tag[];

  @SpeakeasyMetadata()
  tdeCredentialArn?: string;

  @SpeakeasyMetadata()
  timezone?: string;

  @SpeakeasyMetadata()
  vpcId?: string;
}
