import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VmManagerTypeEnum } from "./vmmanagertypeenum";
import { VmServerAddress } from "./vmserveraddress";


// VmServer
/** 
 * Represents a VM server.
**/
export class VmServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=vmManagerName" })
  vmManagerName?: string;

  @Metadata({ data: "json, name=vmManagerType" })
  vmManagerType?: VmManagerTypeEnum;

  @Metadata({ data: "json, name=vmName" })
  vmName?: string;

  @Metadata({ data: "json, name=vmPath" })
  vmPath?: string;

  @Metadata({ data: "json, name=vmServerAddress" })
  vmServerAddress?: VmServerAddress;
}
