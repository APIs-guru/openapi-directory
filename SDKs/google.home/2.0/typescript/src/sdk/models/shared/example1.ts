import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=aogh" })
  aogh: Aogh;

  @Metadata({ data: "json, name=audio" })
  audio: Audio;

  @Metadata({ data: "json, name=build_info" })
  buildInfo: BuildInfo;

  @Metadata({ data: "json, name=detail" })
  detail: Detail;

  @Metadata({ data: "json, name=device_info" })
  deviceInfo: DeviceInfo;

  @Metadata({ data: "json, name=multizone" })
  multizone: Multizone;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=net" })
  net: Net;

  @Metadata({ data: "json, name=night_mode_params" })
  nightModeParams: NightModeParams;

  @Metadata({ data: "json, name=opencast" })
  opencast: Opencast;

  @Metadata({ data: "json, name=opt_in" })
  optIn: OptIn;

  @Metadata({ data: "json, name=proxy" })
  proxy: Proxy;

  @Metadata({ data: "json, name=settings" })
  settings: Settings;

  @Metadata({ data: "json, name=setup" })
  setup: Setup;

  @Metadata({ data: "json, name=sign" })
  sign: Sign;

  @Metadata({ data: "json, name=user_eq" })
  userEq: UserEq;

  @Metadata({ data: "json, name=version" })
  version: number;

  @Metadata({ data: "json, name=wifi" })
  wifi: Wifi;
}
