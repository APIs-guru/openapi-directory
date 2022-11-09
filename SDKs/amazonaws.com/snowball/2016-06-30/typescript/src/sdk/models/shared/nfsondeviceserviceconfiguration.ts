import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StorageUnitEnum } from "./storageunitenum";


// NfsOnDeviceServiceConfiguration
/** 
 * An object that represents metadata and configuration settings for NFS service on an AWS Snow Family device.
**/
export class NfsOnDeviceServiceConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=StorageLimit" })
  storageLimit?: number;

  @Metadata({ data: "json, name=StorageUnit" })
  storageUnit?: StorageUnitEnum;
}
