import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OptIn extends SpeakeasyBase {
  @Metadata({ data: "json, name=audio_hdr" })
  audioHdr: boolean;

  @Metadata({ data: "json, name=audio_surround_mode" })
  audioSurroundMode: number;

  @Metadata({ data: "json, name=autoplay_on_signal" })
  autoplayOnSignal: boolean;

  @Metadata({ data: "json, name=cloud_ipc" })
  cloudIpc: boolean;

  @Metadata({ data: "json, name=hdmi_prefer_50hz" })
  hdmiPrefer50hz: boolean;

  @Metadata({ data: "json, name=hdmi_prefer_high_fps" })
  hdmiPreferHighFps: boolean;

  @Metadata({ data: "json, name=managed_mode" })
  managedMode: boolean;

  @Metadata({ data: "json, name=opencast" })
  opencast: boolean;

  @Metadata({ data: "json, name=preview_channel" })
  previewChannel: boolean;

  @Metadata({ data: "json, name=remote_ducking" })
  remoteDucking: boolean;

  @Metadata({ data: "json, name=stats" })
  stats: boolean;

  @Metadata({ data: "json, name=ui_flipped" })
  uiFlipped: boolean;

  @Metadata({ data: "json, name=wpa3_support_enabled" })
  wpa3SupportEnabled: boolean;
}
