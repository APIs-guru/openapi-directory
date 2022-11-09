import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Identifying information about the device.
**/
export declare class DeviceSummary extends SpeakeasyBase {
    associatedWithJob?: string;
    managedDeviceArn?: string;
    managedDeviceId?: string;
    tags?: Map<string, string>;
}
