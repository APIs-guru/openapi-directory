import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetDevicePositionResponse extends SpeakeasyBase {
    deviceId?: string;
    position: number[];
    receivedTime: Date;
    sampleTime: Date;
}
