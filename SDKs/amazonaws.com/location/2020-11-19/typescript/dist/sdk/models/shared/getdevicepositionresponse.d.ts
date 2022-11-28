import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDevicePositionResponse extends SpeakeasyBase {
    deviceId?: string;
    position: number[];
    receivedTime: Date;
    sampleTime: Date;
}
