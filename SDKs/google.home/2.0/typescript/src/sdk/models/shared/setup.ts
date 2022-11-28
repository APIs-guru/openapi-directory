import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Stats } from "./stats";



export class Setup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=qr_ssid_suffix" })
  qrSsidSuffix: string;

  @SpeakeasyMetadata({ data: "json, name=setup_state" })
  setupState: number;

  @SpeakeasyMetadata({ data: "json, name=ssid_suffix" })
  ssidSuffix: string;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats: Stats;

  @SpeakeasyMetadata({ data: "json, name=tos_accepted" })
  tosAccepted: boolean;
}
