import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TelephonyInfo
/** 
 * Telephony information associated with a given SIM card on the device. Only supported on fully managed devices starting from Android API level 23.
**/
export class TelephonyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrierName" })
  carrierName?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
