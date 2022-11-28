import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DbSnapshot extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocatedStorage?: number;

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  dbInstanceIdentifier?: string;

  @SpeakeasyMetadata()
  dbSnapshotIdentifier?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  instanceCreateTime?: Date;

  @SpeakeasyMetadata()
  iops?: number;

  @SpeakeasyMetadata()
  licenseModel?: string;

  @SpeakeasyMetadata()
  masterUsername?: string;

  @SpeakeasyMetadata()
  optionGroupName?: string;

  @SpeakeasyMetadata()
  percentProgress?: number;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata()
  snapshotCreateTime?: Date;

  @SpeakeasyMetadata()
  snapshotType?: string;

  @SpeakeasyMetadata()
  sourceRegion?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  storageType?: string;

  @SpeakeasyMetadata()
  tdeCredentialArn?: string;

  @SpeakeasyMetadata()
  vpcId?: string;
}
