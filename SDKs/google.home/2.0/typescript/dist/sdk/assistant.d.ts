import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Assistant {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * accessibility - Accessibility
     *
     * This controls Accessibility sounds. `hotword_enabled` is for 'Play start sound' and `endpoint_enabled` is for 'Play end sound'.
     * Sending an empty-body POST request returns the current values.
     * Either of the fields or both can be sent and new values will be saved.
    **/
    accessibility(req: operations.AccessibilityRequest, config?: AxiosRequestConfig): Promise<operations.AccessibilityResponse>;
    /**
     * alarmVolume - Alarm Volume
     *
     * This gets and sets alarms and timers volume.
     * **Note:** This is not the same as normal volume.
     *
     * Volume is a float number in [0, 1] where 0 is minimum and 1 is maximum.
     * Sending an empty body gets the volume. Sending `volume` sets the volume.
    **/
    alarmVolume(req: operations.AlarmVolumeRequest, config?: AxiosRequestConfig): Promise<operations.AlarmVolumeResponse>;
    /**
     * deleteAlarmsandTimers - Delete Alarms and Timers
     *
     * This deletes alarms and timers by their id.
     *
     * `ids` is a list of ids to be deleted. Sending invalid id still returns a 200 OK. The `/` in the ids have to be escaped like `\/`.
    **/
    deleteAlarmsandTimers(req: operations.DeleteAlarmsandTimersRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAlarmsandTimersResponse>;
    /**
     * doNotDisturb - Do Not Disturb
     *
     * This is for the Do Not Disturb option. Sending an empty-body POST returns the current value. Sending a new value changes it.
    **/
    doNotDisturb(req: operations.DoNotDisturbRequest, config?: AxiosRequestConfig): Promise<operations.DoNotDisturbResponse>;
    /**
     * getAlarmsandTimers - Get Alarms and Timers
     *
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
    getAlarmsandTimers(config?: AxiosRequestConfig): Promise<operations.GetAlarmsandTimersResponse>;
    /**
     * setEqualizerValues - Set Equalizer Values
     *
     * This can only set new equalizer values. To get already set values, use /setup/eureka_info.
     *
     * The body is mandatory. It can either contain `low_shelf` or `high_shelf` or both.
     *
     * `low_shelf.gain_db` and `high_shelf.gain_db` refer to **bass** and **treble** respectively.
     *
     * Default values are 0 for both.
     * While the slider in the Home app only ranges from -6 to +6, they can be set to any integer like 50 or -100. These changes persist.
    **/
    setEqualizerValues(req: operations.SetEqualizerValuesRequest, config?: AxiosRequestConfig): Promise<operations.SetEqualizerValuesResponse>;
}
