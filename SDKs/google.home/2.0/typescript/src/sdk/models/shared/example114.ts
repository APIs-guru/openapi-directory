import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Example114 extends SpeakeasyBase {
  @Metadata({ data: "json, name=bssid" })
  bssid: string;

  @Metadata({ data: "json, name=signal_level" })
  signalLevel: number;

  @Metadata({ data: "json, name=ssid" })
  ssid: string;

  @Metadata({ data: "json, name=wpa_auth" })
  wpaAuth: number;

  @Metadata({ data: "json, name=wpa_cipher" })
  wpaCipher: number;

  @Metadata({ data: "json, name=wpa_id" })
  wpaId: number;
}
