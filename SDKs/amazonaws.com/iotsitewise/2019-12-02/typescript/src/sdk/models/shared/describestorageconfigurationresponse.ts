import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationStatus } from "./configurationstatus";
import { MultiLayerStorage } from "./multilayerstorage";
import { StorageTypeEnum } from "./storagetypeenum";



export class DescribeStorageConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationStatus" })
  configurationStatus: ConfigurationStatus;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateDate" })
  lastUpdateDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=multiLayerStorage" })
  multiLayerStorage?: MultiLayerStorage;

  @SpeakeasyMetadata({ data: "json, name=storageType" })
  storageType: StorageTypeEnum;
}
