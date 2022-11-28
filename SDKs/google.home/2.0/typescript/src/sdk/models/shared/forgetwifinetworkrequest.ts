import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ForgetWiFiNetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=wpa_id" })
  wpaId: number;
}
