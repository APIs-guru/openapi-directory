import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StorageUnitEnum } from "./storageunitenum";



// NfsOnDeviceServiceConfiguration
/** 
 * An object that represents metadata and configuration settings for NFS service on an AWS Snow Family device.
**/
export class NfsOnDeviceServiceConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StorageLimit" })
  storageLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=StorageUnit" })
  storageUnit?: StorageUnitEnum;
}
