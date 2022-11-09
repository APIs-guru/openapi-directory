import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ConnecttoWiFiNetworkRequest extends SpeakeasyBase {
    bssid: string;
    encPasswd: string;
    signalLevel: number;
    ssid: string;
    wpaAuth: number;
    wpaCipher: number;
}
