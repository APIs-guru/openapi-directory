import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsRdsDbProcessorFeature } from "./awsrdsdbprocessorfeature";


// AwsRdsDbSnapshotDetails
/** 
 * Provides details about an Amazon RDS DB cluster snapshot.
**/
export class AwsRdsDbSnapshotDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllocatedStorage" })
  allocatedStorage?: number;

  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=DbInstanceIdentifier" })
  dbInstanceIdentifier?: string;

  @Metadata({ data: "json, name=DbSnapshotIdentifier" })
  dbSnapshotIdentifier?: string;

  @Metadata({ data: "json, name=DbiResourceId" })
  dbiResourceId?: string;

  @Metadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @Metadata({ data: "json, name=Engine" })
  engine?: string;

  @Metadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "json, name=IamDatabaseAuthenticationEnabled" })
  iamDatabaseAuthenticationEnabled?: boolean;

  @Metadata({ data: "json, name=InstanceCreateTime" })
  instanceCreateTime?: string;

  @Metadata({ data: "json, name=Iops" })
  iops?: number;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=LicenseModel" })
  licenseModel?: string;

  @Metadata({ data: "json, name=MasterUsername" })
  masterUsername?: string;

  @Metadata({ data: "json, name=OptionGroupName" })
  optionGroupName?: string;

  @Metadata({ data: "json, name=PercentProgress" })
  percentProgress?: number;

  @Metadata({ data: "json, name=Port" })
  port?: number;

  @Metadata({ data: "json, name=ProcessorFeatures", elemType: shared.AwsRdsDbProcessorFeature })
  processorFeatures?: AwsRdsDbProcessorFeature[];

  @Metadata({ data: "json, name=SnapshotCreateTime" })
  snapshotCreateTime?: string;

  @Metadata({ data: "json, name=SnapshotType" })
  snapshotType?: string;

  @Metadata({ data: "json, name=SourceDbSnapshotIdentifier" })
  sourceDbSnapshotIdentifier?: string;

  @Metadata({ data: "json, name=SourceRegion" })
  sourceRegion?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=StorageType" })
  storageType?: string;

  @Metadata({ data: "json, name=TdeCredentialArn" })
  tdeCredentialArn?: string;

  @Metadata({ data: "json, name=Timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
