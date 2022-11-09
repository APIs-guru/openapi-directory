import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Capabilities } from "./capabilities";
export declare class DeviceInfo extends SpeakeasyBase {
    fourkBlocked: number;
    capabilities: Capabilities;
    cloudDeviceId: string;
    factoryCountryCode: string;
    hotspotBssid: string;
    localAuthorizationTokenHash: string;
    macAddress: string;
    manufacturer: string;
    modelName: string;
    productName: string;
    publicKey: string;
    ssdpUdn: string;
    umaClientId: string;
    uptime: number;
    weaveDeviceId: string;
}
