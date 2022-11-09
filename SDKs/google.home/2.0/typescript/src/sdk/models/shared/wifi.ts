import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Wifi extends SpeakeasyBase {
  @Metadata({ data: "json, name=bssid" })
  bssid: string;

  @Metadata({ data: "json, name=has_changes" })
  hasChanges: boolean;

  @Metadata({ data: "json, name=noise_level" })
  noiseLevel: number;

  @Metadata({ data: "json, name=signal_level" })
  signalLevel: number;

  @Metadata({ data: "json, name=ssid" })
  ssid: string;

  @Metadata({ data: "json, name=wpa_configured" })
  wpaConfigured: boolean;

  @Metadata({ data: "json, name=wpa_id" })
  wpaId: number;

  @Metadata({ data: "json, name=wpa_state" })
  wpaState: number;
}
