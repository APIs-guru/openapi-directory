import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Window } from "./window";



export class NightModeParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device_override_do_not_disturb" })
  deviceOverrideDoNotDisturb: number;

  @SpeakeasyMetadata({ data: "json, name=do_not_disturb" })
  doNotDisturb: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=led_brightness" })
  ledBrightness: number;

  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume: number;

  @SpeakeasyMetadata({ data: "json, name=windows", elemType: Window })
  windows: Window[];
}
