import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the position update details for a device.
**/
export declare class DevicePositionUpdate extends SpeakeasyBase {
    deviceId: string;
    position: number[];
    sampleTime: Date;
}
