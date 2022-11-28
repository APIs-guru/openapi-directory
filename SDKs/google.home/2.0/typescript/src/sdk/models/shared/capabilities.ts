import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Capabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aogh_supported" })
  aoghSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=assistant_supported" })
  assistantSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=audio_hdr_supported" })
  audioHdrSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=audio_surround_mode_supported" })
  audioSurroundModeSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=ble_supported" })
  bleSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=bluetooth_audio_sink_supported" })
  bluetoothAudioSinkSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=bluetooth_audio_source_supported" })
  bluetoothAudioSourceSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=bluetooth_supported" })
  bluetoothSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=cloudcast_supported" })
  cloudcastSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=content_filters_supported" })
  contentFiltersSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=display_supported" })
  displaySupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=fdr_supported" })
  fdrSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=hdmi_prefer_50hz_supported" })
  hdmiPrefer50hzSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=hdmi_prefer_high_fps_supported" })
  hdmiPreferHighFpsSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=hotspot_supported" })
  hotspotSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=https_setup_supported" })
  httpsSetupSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=input_management_supported" })
  inputManagementSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=keep_hotspot_until_connected_supported" })
  keepHotspotUntilConnectedSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=multi_user_supported" })
  multiUserSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=multichannel_group_supported" })
  multichannelGroupSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=multizone_supported" })
  multizoneSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=night_mode_supported" })
  nightModeSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=night_mode_supported_v2" })
  nightModeSupportedV2: boolean;

  @SpeakeasyMetadata({ data: "json, name=opencast_supported" })
  opencastSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=preview_channel_supported" })
  previewChannelSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=reboot_supported" })
  rebootSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=remote_ducking_supported" })
  remoteDuckingSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=separate_tts_volume_supported" })
  separateTtsVolumeSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=setup_supported" })
  setupSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=sleep_mode_supported" })
  sleepModeSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=stats_supported" })
  statsSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=system_sound_effects_supported" })
  systemSoundEffectsSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=user_eq_supported" })
  userEqSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=wifi_auto_save_supported" })
  wifiAutoSaveSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=wifi_regulatory_domain_locked" })
  wifiRegulatoryDomainLocked: boolean;

  @SpeakeasyMetadata({ data: "json, name=wifi_supported" })
  wifiSupported: boolean;
}
