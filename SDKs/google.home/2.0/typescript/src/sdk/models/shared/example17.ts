import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Window2 } from "./window2";


export class Example17 extends SpeakeasyBase {
  @Metadata({ data: "json, name=do_not_disturb" })
  doNotDisturb: boolean;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=led_brightness" })
  ledBrightness: number;

  @Metadata({ data: "json, name=volume" })
  volume: number;

  @Metadata({ data: "json, name=windows", elemType: shared.Window2 })
  windows: Window2[];
}
