import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationStatus } from "./configurationstatus";
import { MultiLayerStorage } from "./multilayerstorage";
import { StorageTypeEnum } from "./storagetypeenum";
export declare class DescribeStorageConfigurationResponse extends SpeakeasyBase {
    configurationStatus: ConfigurationStatus;
    lastUpdateDate?: Date;
    multiLayerStorage?: MultiLayerStorage;
    storageType: StorageTypeEnum;
}
