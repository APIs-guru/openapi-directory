import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * This controls Accessibility sounds. `hotword_enabled` is for 'Play start sound' and `endpoint_enabled` is for 'Play end sound'.
     * Sending an empty-body POST request returns the current values.
     * Either of the fields or both can be sent and new values will be saved.
    **/
    Accessibility(req: operations.AccessibilityRequest, config?: AxiosRequestConfig): Promise<operations.AccessibilityResponse>;
    /**
     * This gets and sets alarms and timers volume.
     * **Note:** This is not the same as normal volume.
     *
     * Volume is a float number in [0, 1] where 0 is minimum and 1 is maximum.
     * Sending an empty body gets the volume. Sending `volume` sets the volume.
    **/
    AlarmVolume(req: operations.AlarmVolumeRequest, config?: AxiosRequestConfig): Promise<operations.AlarmVolumeResponse>;
    /**
     * This gives "app device id", "certificate" and "signed data".
     * The `app_id` in the request is mandatory and refers to Chromecast backdrop/screensaver app. It has to be set to `E8C28D3C`.
     *
     * The certificate is valid and issued by `Chromecast ICA 6 (Audio Assist), Google Inc`.
     *
     * Not sure what the other two are.
    **/
    AppDeviceId(req: operations.AppDeviceIdRequest, config?: AxiosRequestConfig): Promise<operations.AppDeviceIdResponse>;
    /**
     * *See note for Bluetooth under `/setup/bluetooth/status`*
     *
     * **For Part 1 only**
     *
     * This enables/disables Home's bluetooth discovery and other devices can pair with Home (where Home acts as a speaker).
    **/
    ChangeDiscoverability(req: operations.ChangeDiscoverabilityRequest, config?: AxiosRequestConfig): Promise<operations.ChangeDiscoverabilityResponse>;
    /**
     * **Update:** This seems to have changed now and is no longer possible. The error is also new.
     *
     * Setting `play_ready_message` to true plays a welcome message on the device saying "Hi, I'm your Google Assistant. I'm here to help. To learn a few things you can do, continue in the Google Home app."
    **/
    CheckReadyStatus(req: operations.CheckReadyStatusRequest, config?: AxiosRequestConfig): Promise<operations.CheckReadyStatusResponse>;
    /**
     * **Update:** This no longer exists. It's not useful, anyway.
     *
     * A redirect to `http://www.gstatic.com/eureka/images/eureka_device.png`
    **/
    ChromecastIcon(config?: AxiosRequestConfig): Promise<operations.ChromecastIconResponse>;
    /**
     * **Note:** Not sure how the password is encrypted. Might be using the public certificate from /setup/eureka_info. So this cannot be used as of now. If someone figures it out, please [create a new issue here](https://github.com/rithvikvibhu/GHLocalApi/issues/new).
    **/
    ConnecttoWiFiNetwork(req: operations.ConnecttoWiFiNetworkRequest, config?: AxiosRequestConfig): Promise<operations.ConnecttoWiFiNetworkResponse>;
    /**
     * This deletes alarms and timers by their id.
     *
     * `ids` is a list of ids to be deleted. Sending invalid id still returns a 200 OK. The `/` in the ids have to be escaped like `\/`.
    **/
    DeleteAlarmsandTimers(req: operations.DeleteAlarmsandTimersRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAlarmsandTimersResponse>;
    /**
     * This is for the Do Not Disturb option. Sending an empty-body POST returns the current value. Sending a new value changes it.
    **/
    DoNotDisturb(req: operations.DoNotDisturbRequest, config?: AxiosRequestConfig): Promise<operations.DoNotDisturbResponse>;
    /**
     * This gives most of the device info. The GET parameter `param` is a comma separated list of json keys to fetch. Currently, these params are known: `version,audio,name,build_info,detail,device_info,net,wifi,setup,settings,opt_in,opencast,multizone,proxy,night_mode_params,user_eq,room_equalizer,sign,aogh,ultrasound,mesh`
     *
     * Nested items can also be filtered using the dot notation. Example: `audio.digital`
     *
     * The `options` GET parameter is always set to `detail` or `detail,sign`. `sign` signs the `nonce` and returns some value.
     *
     * The `nonce` GET parameter is an integer value signed with needed (see `option` parameter above).
    **/
    EurekaInfo(req: operations.EurekaInfoRequest, config?: AxiosRequestConfig): Promise<operations.EurekaInfoResponse>;
    /**
     * This is to forget a saved network by `wpa_id`. Get the `wpa_id` from /setup/configured_networks
    **/
    ForgetWiFiNetwork(req: operations.ForgetWiFiNetworkRequest, config?: AxiosRequestConfig): Promise<operations.ForgetWiFiNetworkResponse>;
    /**
     * *See note for Bluetooth under `/setup/bluetooth/status`*
     *
     * **For both parts**
     *
     * This is to forget paired devices by mac address. Works for both kinds of devices (Part 1 and Part 2).
    **/
    Forgetpaireddevice(req: operations.ForgetpaireddeviceRequest, config?: AxiosRequestConfig): Promise<operations.ForgetpaireddeviceResponse>;
    /**
     * This gives a list of all active alarms and timers.
     *
     * Both alarms and timers have `id`s which can be used to delete them. (There is no known way of creating/deleting yet). The value of `status` have different meanings for alarms and timers (given below).
     *
     * Alarms have `date_pattern` and `time_pattern` with day, month, year, hour, minute, second. `fire_time` is the same in unix time (milliseconds, not seconds).
     * `status` is 1 for set up and 2 for ringing.
     *
     * Timers have `original_duration` is the original duration.
     * `status` is 1 for set up and 3 for ringing.
    **/
    GetAlarmsandTimers(config?: AxiosRequestConfig): Promise<operations.GetAlarmsandTimersResponse>;
    /**
     * *See note for Bluetooth under `/setup/bluetooth/status`*
     *
     * **For both parts**
     *
     * This gives a list of all paired or 'bonded' devices. The response field names are self-descriptive.
    **/
    GetPairedDevices(config?: AxiosRequestConfig): Promise<operations.GetPairedDevicesResponse>;
    /**
     * This gets a list of all saved Wi-Fi networks.
     *
     * Each network has `ssid`, `wpa_auth`, `wpa_cipher` and `wpa_id`.
     * `wpa_id` is an incrementing number used to identify a saved network.
     * #TODO: Add values for `wpa_auth` and `wpa_cipher`.
    **/
    GetSavedNetworks(config?: AxiosRequestConfig): Promise<operations.GetSavedNetworksResponse>;
    /**
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
    GetScanResults(config?: AxiosRequestConfig): Promise<operations.GetScanResultsResponse>;
    /**
     * This gets a list of all nearby Wi-Fi access points.
     *
     * The list only has the connected AP by default. Once a scan is triggered by `/setup/scan_wifi`, the whole list is cached for ~3 minutes. Then it will revert to returning only the connected AP again.
    **/
    GetWiFiScanResults(config?: AxiosRequestConfig): Promise<operations.GetWiFiScanResultsResponse>;
    /**
     * All licenses of programs used by Home.
    **/
    LegalNotice(config?: AxiosRequestConfig): Promise<operations.LegalNoticeResponse>;
    /**
     * Simply returns a list of all supported locales.
    **/
    Locales(config?: AxiosRequestConfig): Promise<operations.LocalesResponse>;
    /**
     * This sets night mode options.
     * To view currently set values, use /setup/eureka_info.
     * If `enabled` is set to false, night mode is disabled and the other values do not matter.
     * `led_brightness` and `volume` refer to the maximum LED Brightness and Volume that is set during night mode.
     * `demo_to_user` is always set to `true` so change in values will be visible in realtime (like brightness).
     * `windows`: A combination of `length_hours` and `start_hour` is used to define start and end times for night mode. In this example, night mode starts at 10 PM (22) and ends at 6 AM (8 hours later). `windows.days` is an array of days of week when night mode will be enabled. Example: 0->Sunday, 1-> Monday, ..., 6->Saturday.
    **/
    NightModesettings(req: operations.NightModesettingsRequest, config?: AxiosRequestConfig): Promise<operations.NightModesettingsResponse>;
    /**
     * This gives a token which is used by the Home app to get offers. The offers themselves are not stored on the device.
     * A new token is generated for every request.
    **/
    Offer(config?: AxiosRequestConfig): Promise<operations.OfferResponse>;
    /**
     * *See note for Bluetooth under `/setup/bluetooth/status`*
     *
     * **For Part 2 only**
     *
     * This pairs with other bluetooth speakers by mac address.
    **/
    PairwithSpeaker(req: operations.PairwithSpeakerRequest, config?: AxiosRequestConfig): Promise<operations.PairwithSpeakerResponse>;
    /**
     * This can simply reboot the device (`params: "now"`) or factory reset the device (`params: "fdr"`).
    **/
    RebootandFactoryReset(req: operations.RebootandFactoryResetRequest, config?: AxiosRequestConfig): Promise<operations.RebootandFactoryResetResponse>;
    /**
     * This initiates scanning for Wi-Fi networks.
     *
     * The results can be obtained with `/setup/scan_results` after triggering the scan with this request.
    **/
    ScanforNetworks(config?: AxiosRequestConfig): Promise<operations.ScanforNetworksResponse>;
    /**
     * *See note for Bluetooth under `/setup/bluetooth/status`*
     *
     * **For Part 2 only**
     *
     * This initiates scan for other bluetooth speakers/devices. Scan results will be updated continuously for `timeout` seconds.
     * To get the scan results, see /setup/bluetooth/scan_results.
    **/
    Scanfordevices(req: operations.ScanfordevicesRequest, config?: AxiosRequestConfig): Promise<operations.ScanfordevicesResponse>;
    /**
     * This can only set new equalizer values. To get already set values, use /setup/eureka_info.
     *
     * The body is mandatory. It can either contain `low_shelf` or `high_shelf` or both.
     *
     * `low_shelf.gain_db` and `high_shelf.gain_db` refer to **bass** and **treble** respectively.
     *
     * Default values are 0 for both.
     * While the slider in the Home app only ranges from -6 to +6, they can be set to any integer like 50 or -100. These changes persist.
    **/
    SetEqualizerValues(req: operations.SetEqualizerValuesRequest, config?: AxiosRequestConfig): Promise<operations.SetEqualizerValuesResponse>;
    /**
     * This can set custom values to some options.
     *
     * Only fields to be modified need to be sent, not all. The example has some modifiable fields.
     *
     * TODO: List all modifiable fields.
     *
     * Sending non-existant fields will still return a 200 OK, but they are not saved.
    **/
    SetEurekaInfo(req: operations.SetEurekaInfoRequest, config?: AxiosRequestConfig): Promise<operations.SetEurekaInfoResponse>;
    /**
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
    Status(config?: AxiosRequestConfig): Promise<operations.StatusResponse>;
    /**
     * **Update:** This seems to have been removed. Returns 404 Not Found.
     *
     * This endpoint tests internet download speed. Any sample file URL can be provided.
    **/
    TestInternetDownloadSpeed(req: operations.TestInternetDownloadSpeedRequest, config?: AxiosRequestConfig): Promise<operations.TestInternetDownloadSpeedResponse>;
    /**
     * Simply returns a list of all supported timezones.
    **/
    Timezones(config?: AxiosRequestConfig): Promise<operations.TimezonesResponse>;
}
export {};
