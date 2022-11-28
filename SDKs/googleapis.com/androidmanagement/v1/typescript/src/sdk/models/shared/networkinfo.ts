import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TelephonyInfo } from "./telephonyinfo";



// NetworkInfo
/** 
 * Device network info.
**/
export class NetworkInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imei" })
  imei?: string;

  @SpeakeasyMetadata({ data: "json, name=meid" })
  meid?: string;

  @SpeakeasyMetadata({ data: "json, name=networkOperatorName" })
  networkOperatorName?: string;

  @SpeakeasyMetadata({ data: "json, name=telephonyInfos", elemType: TelephonyInfo })
  telephonyInfos?: TelephonyInfo[];

  @SpeakeasyMetadata({ data: "json, name=wifiMacAddress" })
  wifiMacAddress?: string;
}
