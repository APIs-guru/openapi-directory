import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Window } from "./window";


export class NightModeParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=device_override_do_not_disturb" })
  deviceOverrideDoNotDisturb: number;

  @Metadata({ data: "json, name=do_not_disturb" })
  doNotDisturb: boolean;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=led_brightness" })
  ledBrightness: number;

  @Metadata({ data: "json, name=volume" })
  volume: number;

  @Metadata({ data: "json, name=windows", elemType: shared.Window })
  windows: Window[];
}
