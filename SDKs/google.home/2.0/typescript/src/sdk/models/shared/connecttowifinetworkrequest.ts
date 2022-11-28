import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConnecttoWiFiNetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bssid" })
  bssid: string;

  @SpeakeasyMetadata({ data: "json, name=enc_passwd" })
  encPasswd: string;

  @SpeakeasyMetadata({ data: "json, name=signal_level" })
  signalLevel: number;

  @SpeakeasyMetadata({ data: "json, name=ssid" })
  ssid: string;

  @SpeakeasyMetadata({ data: "json, name=wpa_auth" })
  wpaAuth: number;

  @SpeakeasyMetadata({ data: "json, name=wpa_cipher" })
  wpaCipher: number;
}
