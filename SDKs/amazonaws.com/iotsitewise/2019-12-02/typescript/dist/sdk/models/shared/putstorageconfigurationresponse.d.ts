import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationStatus } from "./configurationstatus";
import { MultiLayerStorage } from "./multilayerstorage";
import { StorageTypeEnum } from "./storagetypeenum";
export declare class PutStorageConfigurationResponse extends SpeakeasyBase {
    configurationStatus: ConfigurationStatus;
    multiLayerStorage?: MultiLayerStorage;
    storageType: StorageTypeEnum;
}
