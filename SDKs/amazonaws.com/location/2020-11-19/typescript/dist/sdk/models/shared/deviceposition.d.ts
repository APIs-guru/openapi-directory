import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Contains the device position details.
**/
export declare class DevicePosition extends SpeakeasyBase {
    deviceId?: string;
    position: number[];
    receivedTime: Date;
    sampleTime: Date;
}
