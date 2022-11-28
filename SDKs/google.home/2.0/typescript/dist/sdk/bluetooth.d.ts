import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Bluetooth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * changeDiscoverability - Change Discoverability
     *
     * *See note for Bluetooth under `/setup/bluetooth/status`*
     *
     * **For Part 1 only**
     *
     * This enables/disables Home's bluetooth discovery and other devices can pair with Home (where Home acts as a speaker).
    **/
    changeDiscoverability(req: operations.ChangeDiscoverabilityRequest, config?: AxiosRequestConfig): Promise<operations.ChangeDiscoverabilityResponse>;
    /**
     * forgetpaireddevice - Forget paired device
     *
     * *See note for Bluetooth under `/setup/bluetooth/status`*
     *
     * **For both parts**
     *
     * This is to forget paired devices by mac address. Works for both kinds of devices (Part 1 and Part 2).
    **/
    forgetpaireddevice(req: operations.ForgetpaireddeviceRequest, config?: AxiosRequestConfig): Promise<operations.ForgetpaireddeviceResponse>;
    /**
     * getPairedDevices - Get Paired Devices
     *
     * *See note for Bluetooth under `/setup/bluetooth/status`*
     *
     * **For both parts**
     *
     * This gives a list of all paired or 'bonded' devices. The response field names are self-descriptive.
    **/
    getPairedDevices(config?: AxiosRequestConfig): Promise<operations.GetPairedDevicesResponse>;
    /**
     * getScanResults - Get Scan Results
     *
     * *See note for Bluetooth under `/setup/bluetooth/status`*
     *
     * **For Part 2 only**
     *
     * This returns a list of all nearby bluetooth devices. While the Home app only shows speakers, this list contains all devices including TVs, mobiles, etc.
     *
     * `rssi` is signal strength, `name` is name, `mac_address` is mac address.
     * `device_class` and `device_type` are bluetooth codes.
     *
     * The Home app only lists those devices with `expected_profiles` > 0. Basically, the device should function as a speaker.
    **/
    getScanResults(config?: AxiosRequestConfig): Promise<operations.GetScanResultsResponse>;
    /**
     * pairwithSpeaker - Pair with Speaker
     *
     * *See note for Bluetooth under `/setup/bluetooth/status`*
     *
     * **For Part 2 only**
     *
     * This pairs with other bluetooth speakers by mac address.
    **/
    pairwithSpeaker(req: operations.PairwithSpeakerRequest, config?: AxiosRequestConfig): Promise<operations.PairwithSpeakerResponse>;
    /**
     * scanfordevices - Scan for devices
     *
     * *See note for Bluetooth under `/setup/bluetooth/status`*
     *
     * **For Part 2 only**
     *
     * This initiates scan for other bluetooth speakers/devices. Scan results will be updated continuously for `timeout` seconds.
     * To get the scan results, see /setup/bluetooth/scan_results.
    **/
    scanfordevices(req: operations.ScanfordevicesRequest, config?: AxiosRequestConfig): Promise<operations.ScanfordevicesResponse>;
    /**
     * status - Status
     *
     * > **There are 2 parts of Bluetooth.**
     * >
     * > *Part 1*: Devices like phones connect to Home and play audio through Home.
     * > For this, /setup/bluetooth/discovery is used to make Home discoverable. Then devices can connect to it as if Home is just another bluetooth speaker.
     * >
     * > *Part 2*: Bluetooth speakers connect to Home and Home plays audio through the speakers.
     * > For this, /setup/bluetooth/scan and /setup/bluetooth/scan_results are used to connect to other speakers.
     * >
     * > The other endpoints are common for both parts.
     *
     *
     * **For both parts**
     *
     * This gives the status of all bluetooth things.
     * - Not sure what `audio_mode` is.
     * - `discovery_enabled` states whether Home is discoverable. (**Part 1**)
     * - `connecting_devices` is a list of all media sources (like phones) connected to Home. (**Part 1**)
     * - `scanning_enabled` states whether Home scanning for other bluetooth speakers/devices. (**Part 2**)
     * - `connected_devices` is a list of all speakers connected to Home. (**Part 2**)
    **/
    status(config?: AxiosRequestConfig): Promise<operations.StatusResponse>;
}
