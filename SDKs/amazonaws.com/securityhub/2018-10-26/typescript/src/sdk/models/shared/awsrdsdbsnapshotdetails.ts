import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsRdsDbProcessorFeature } from "./awsrdsdbprocessorfeature";



// AwsRdsDbSnapshotDetails
/** 
 * Provides details about an Amazon RDS DB cluster snapshot.
**/
export class AwsRdsDbSnapshotDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllocatedStorage" })
  allocatedStorage?: number;

  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=DbInstanceIdentifier" })
  dbInstanceIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=DbSnapshotIdentifier" })
  dbSnapshotIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=DbiResourceId" })
  dbiResourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=IamDatabaseAuthenticationEnabled" })
  iamDatabaseAuthenticationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InstanceCreateTime" })
  instanceCreateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Iops" })
  iops?: number;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseModel" })
  licenseModel?: string;

  @SpeakeasyMetadata({ data: "json, name=MasterUsername" })
  masterUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=OptionGroupName" })
  optionGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=PercentProgress" })
  percentProgress?: number;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=ProcessorFeatures", elemType: AwsRdsDbProcessorFeature })
  processorFeatures?: AwsRdsDbProcessorFeature[];

  @SpeakeasyMetadata({ data: "json, name=SnapshotCreateTime" })
  snapshotCreateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=SnapshotType" })
  snapshotType?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceDbSnapshotIdentifier" })
  sourceDbSnapshotIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceRegion" })
  sourceRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=StorageType" })
  storageType?: string;

  @SpeakeasyMetadata({ data: "json, name=TdeCredentialArn" })
  tdeCredentialArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
