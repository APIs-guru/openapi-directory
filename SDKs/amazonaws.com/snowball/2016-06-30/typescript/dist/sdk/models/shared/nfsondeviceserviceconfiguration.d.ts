import { SpeakeasyBase } from "../../../internal/utils";
import { StorageUnitEnum } from "./storageunitenum";
/**
 * An object that represents metadata and configuration settings for NFS service on an AWS Snow Family device.
**/
export declare class NfsOnDeviceServiceConfiguration extends SpeakeasyBase {
    storageLimit?: number;
    storageUnit?: StorageUnitEnum;
}
