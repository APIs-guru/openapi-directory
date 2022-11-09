import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Stats } from "./stats";


export class Setup extends SpeakeasyBase {
  @Metadata({ data: "json, name=qr_ssid_suffix" })
  qrSsidSuffix: string;

  @Metadata({ data: "json, name=setup_state" })
  setupState: number;

  @Metadata({ data: "json, name=ssid_suffix" })
  ssidSuffix: string;

  @Metadata({ data: "json, name=stats" })
  stats: Stats;

  @Metadata({ data: "json, name=tos_accepted" })
  tosAccepted: boolean;
}
