import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Window2 } from "./window2";



export class Example17 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=do_not_disturb" })
  doNotDisturb: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=led_brightness" })
  ledBrightness: number;

  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume: number;

  @SpeakeasyMetadata({ data: "json, name=windows", elemType: Window2 })
  windows: Window2[];
}
