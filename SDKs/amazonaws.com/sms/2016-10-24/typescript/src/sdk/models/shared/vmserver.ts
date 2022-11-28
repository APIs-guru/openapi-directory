import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VmManagerTypeEnum } from "./vmmanagertypeenum";
import { VmServerAddress } from "./vmserveraddress";



// VmServer
/** 
 * Represents a VM server.
**/
export class VmServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vmManagerName" })
  vmManagerName?: string;

  @SpeakeasyMetadata({ data: "json, name=vmManagerType" })
  vmManagerType?: VmManagerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=vmName" })
  vmName?: string;

  @SpeakeasyMetadata({ data: "json, name=vmPath" })
  vmPath?: string;

  @SpeakeasyMetadata({ data: "json, name=vmServerAddress" })
  vmServerAddress?: VmServerAddress;
}
