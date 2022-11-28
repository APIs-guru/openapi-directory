import { SpeakeasyBase } from "../../../internal/utils";
export declare class Device extends SpeakeasyBase {
    bondDate: number;
    deviceClass: number;
    deviceType: number;
    lastConnectDate: number;
    macAddress: string;
    name: string;
    rssi: number;
    serviceUuids: string[];
}
