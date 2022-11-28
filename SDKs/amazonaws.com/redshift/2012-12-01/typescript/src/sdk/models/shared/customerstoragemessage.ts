import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomerStorageMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  totalBackupSizeInMegaBytes?: number;

  @SpeakeasyMetadata()
  totalProvisionedStorageInMegaBytes?: number;
}
