import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Wifi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bssid" })
  bssid: string;

  @SpeakeasyMetadata({ data: "json, name=has_changes" })
  hasChanges: boolean;

  @SpeakeasyMetadata({ data: "json, name=noise_level" })
  noiseLevel: number;

  @SpeakeasyMetadata({ data: "json, name=signal_level" })
  signalLevel: number;

  @SpeakeasyMetadata({ data: "json, name=ssid" })
  ssid: string;

  @SpeakeasyMetadata({ data: "json, name=wpa_configured" })
  wpaConfigured: boolean;

  @SpeakeasyMetadata({ data: "json, name=wpa_id" })
  wpaId: number;

  @SpeakeasyMetadata({ data: "json, name=wpa_state" })
  wpaState: number;
}
