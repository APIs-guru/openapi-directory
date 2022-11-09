import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TelephonyInfo
/** 
 * Telephony information associated with a given SIM card on the device. Only supported on fully managed devices starting from Android API level 23.
**/
export class TelephonyInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=carrierName" })
  carrierName?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
