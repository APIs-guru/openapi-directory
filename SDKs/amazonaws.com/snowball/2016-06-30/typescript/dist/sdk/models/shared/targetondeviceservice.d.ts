import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceServiceNameEnum } from "./deviceservicenameenum";
import { TransferOptionEnum } from "./transferoptionenum";
/**
 * An object that represents the service or services on the Snow Family device that your transferred data will be exported from or imported into. AWS Snow Family supports Amazon S3 and NFS (Network File System).
**/
export declare class TargetOnDeviceService extends SpeakeasyBase {
    serviceName?: DeviceServiceNameEnum;
    transferOption?: TransferOptionEnum;
}
