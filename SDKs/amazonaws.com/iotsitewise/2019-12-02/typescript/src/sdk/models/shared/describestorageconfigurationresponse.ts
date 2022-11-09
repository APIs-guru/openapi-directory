import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationStatus } from "./configurationstatus";
import { MultiLayerStorage } from "./multilayerstorage";
import { StorageTypeEnum } from "./storagetypeenum";


export class DescribeStorageConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurationStatus" })
  configurationStatus: ConfigurationStatus;

  @Metadata({ data: "json, name=lastUpdateDate" })
  lastUpdateDate?: Date;

  @Metadata({ data: "json, name=multiLayerStorage" })
  multiLayerStorage?: MultiLayerStorage;

  @Metadata({ data: "json, name=storageType" })
  storageType: StorageTypeEnum;
}
