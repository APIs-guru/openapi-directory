import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PendingModifiedValues extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocatedStorage?: number;

  @SpeakeasyMetadata()
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata()
  dbInstanceClass?: string;

  @SpeakeasyMetadata()
  dbInstanceIdentifier?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  iops?: number;

  @SpeakeasyMetadata()
  masterUserPassword?: string;

  @SpeakeasyMetadata()
  multiAz?: boolean;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata()
  storageType?: string;
}
