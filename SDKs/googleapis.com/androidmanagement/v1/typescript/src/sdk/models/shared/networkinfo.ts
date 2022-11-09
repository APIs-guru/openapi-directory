import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TelephonyInfo } from "./telephonyinfo";


// NetworkInfo
/** 
 * Device network info.
**/
export class NetworkInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=imei" })
  imei?: string;

  @Metadata({ data: "json, name=meid" })
  meid?: string;

  @Metadata({ data: "json, name=networkOperatorName" })
  networkOperatorName?: string;

  @Metadata({ data: "json, name=telephonyInfos", elemType: shared.TelephonyInfo })
  telephonyInfos?: TelephonyInfo[];

  @Metadata({ data: "json, name=wifiMacAddress" })
  wifiMacAddress?: string;
}
