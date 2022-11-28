import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Aogh } from "./aogh";
import { Audio } from "./audio";
import { BuildInfo } from "./buildinfo";
import { Detail } from "./detail";
import { DeviceInfo } from "./deviceinfo";
import { Multizone } from "./multizone";
import { Net } from "./net";
import { NightModeParams } from "./nightmodeparams";
import { Opencast } from "./opencast";
import { OptIn } from "./optin";
import { Proxy } from "./proxy";
import { Settings } from "./settings";
import { Setup } from "./setup";
import { Sign } from "./sign";
import { UserEq } from "./usereq";
import { Wifi } from "./wifi";



export class Example1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aogh" })
  aogh: Aogh;

  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio: Audio;

  @SpeakeasyMetadata({ data: "json, name=build_info" })
  buildInfo: BuildInfo;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: Detail;

  @SpeakeasyMetadata({ data: "json, name=device_info" })
  deviceInfo: DeviceInfo;

  @SpeakeasyMetadata({ data: "json, name=multizone" })
  multizone: Multizone;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: Net;

  @SpeakeasyMetadata({ data: "json, name=night_mode_params" })
  nightModeParams: NightModeParams;

  @SpeakeasyMetadata({ data: "json, name=opencast" })
  opencast: Opencast;

  @SpeakeasyMetadata({ data: "json, name=opt_in" })
  optIn: OptIn;

  @SpeakeasyMetadata({ data: "json, name=proxy" })
  proxy: Proxy;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings: Settings;

  @SpeakeasyMetadata({ data: "json, name=setup" })
  setup: Setup;

  @SpeakeasyMetadata({ data: "json, name=sign" })
  sign: Sign;

  @SpeakeasyMetadata({ data: "json, name=user_eq" })
  userEq: UserEq;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: number;

  @SpeakeasyMetadata({ data: "json, name=wifi" })
  wifi: Wifi;
}
