import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceServiceNameEnum } from "./deviceservicenameenum";
import { TransferOptionEnum } from "./transferoptionenum";


// TargetOnDeviceService
/** 
 * An object that represents the service or services on the Snow Family device that your transferred data will be exported from or imported into. AWS Snow Family supports Amazon S3 and NFS (Network File System).
**/
export class TargetOnDeviceService extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServiceName" })
  serviceName?: DeviceServiceNameEnum;

  @Metadata({ data: "json, name=TransferOption" })
  transferOption?: TransferOptionEnum;
}
