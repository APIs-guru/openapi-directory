import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptIn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_hdr" })
  audioHdr: boolean;

  @SpeakeasyMetadata({ data: "json, name=audio_surround_mode" })
  audioSurroundMode: number;

  @SpeakeasyMetadata({ data: "json, name=autoplay_on_signal" })
  autoplayOnSignal: boolean;

  @SpeakeasyMetadata({ data: "json, name=cloud_ipc" })
  cloudIpc: boolean;

  @SpeakeasyMetadata({ data: "json, name=hdmi_prefer_50hz" })
  hdmiPrefer50hz: boolean;

  @SpeakeasyMetadata({ data: "json, name=hdmi_prefer_high_fps" })
  hdmiPreferHighFps: boolean;

  @SpeakeasyMetadata({ data: "json, name=managed_mode" })
  managedMode: boolean;

  @SpeakeasyMetadata({ data: "json, name=opencast" })
  opencast: boolean;

  @SpeakeasyMetadata({ data: "json, name=preview_channel" })
  previewChannel: boolean;

  @SpeakeasyMetadata({ data: "json, name=remote_ducking" })
  remoteDucking: boolean;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats: boolean;

  @SpeakeasyMetadata({ data: "json, name=ui_flipped" })
  uiFlipped: boolean;

  @SpeakeasyMetadata({ data: "json, name=wpa3_support_enabled" })
  wpa3SupportEnabled: boolean;
}
