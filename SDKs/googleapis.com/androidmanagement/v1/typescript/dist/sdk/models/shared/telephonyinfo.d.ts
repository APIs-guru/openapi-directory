import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Telephony information associated with a given SIM card on the device. Only supported on fully managed devices starting from Android API level 23.
**/
export declare class TelephonyInfo extends SpeakeasyBase {
    carrierName?: string;
    phoneNumber?: string;
}
