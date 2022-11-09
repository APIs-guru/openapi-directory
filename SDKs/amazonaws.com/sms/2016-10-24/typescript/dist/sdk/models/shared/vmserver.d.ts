import { SpeakeasyBase } from "../../../internal/utils/utils";
import { VmManagerTypeEnum } from "./vmmanagertypeenum";
import { VmServerAddress } from "./vmserveraddress";
/**
 * Represents a VM server.
**/
export declare class VmServer extends SpeakeasyBase {
    vmManagerName?: string;
    vmManagerType?: VmManagerTypeEnum;
    vmName?: string;
    vmPath?: string;
    vmServerAddress?: VmServerAddress;
}
