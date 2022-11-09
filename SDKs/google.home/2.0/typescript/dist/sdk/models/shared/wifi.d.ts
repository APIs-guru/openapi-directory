import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class Wifi extends SpeakeasyBase {
    bssid: string;
    hasChanges: boolean;
    noiseLevel: number;
    signalLevel: number;
    ssid: string;
    wpaConfigured: boolean;
    wpaId: number;
    wpaState: number;
}
