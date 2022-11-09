import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Capacity } from "./capacity";
import { UnlockStateEnum } from "./unlockstateenum";
import { PhysicalNetworkInterface } from "./physicalnetworkinterface";
import { SoftwareInformation } from "./softwareinformation";
export declare class DescribeDeviceOutput extends SpeakeasyBase {
    associatedWithJob?: string;
    deviceCapacities?: Capacity[];
    deviceState?: UnlockStateEnum;
    deviceType?: string;
    lastReachedOutAt?: Date;
    lastUpdatedAt?: Date;
    managedDeviceArn?: string;
    managedDeviceId?: string;
    physicalNetworkInterfaces?: PhysicalNetworkInterface[];
    software?: SoftwareInformation;
    tags?: Map<string, string>;
}
