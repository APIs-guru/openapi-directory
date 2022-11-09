import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Capabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=aogh_supported" })
  aoghSupported: boolean;

  @Metadata({ data: "json, name=assistant_supported" })
  assistantSupported: boolean;

  @Metadata({ data: "json, name=audio_hdr_supported" })
  audioHdrSupported: boolean;

  @Metadata({ data: "json, name=audio_surround_mode_supported" })
  audioSurroundModeSupported: boolean;

  @Metadata({ data: "json, name=ble_supported" })
  bleSupported: boolean;

  @Metadata({ data: "json, name=bluetooth_audio_sink_supported" })
  bluetoothAudioSinkSupported: boolean;

  @Metadata({ data: "json, name=bluetooth_audio_source_supported" })
  bluetoothAudioSourceSupported: boolean;

  @Metadata({ data: "json, name=bluetooth_supported" })
  bluetoothSupported: boolean;

  @Metadata({ data: "json, name=cloudcast_supported" })
  cloudcastSupported: boolean;

  @Metadata({ data: "json, name=content_filters_supported" })
  contentFiltersSupported: boolean;

  @Metadata({ data: "json, name=display_supported" })
  displaySupported: boolean;

  @Metadata({ data: "json, name=fdr_supported" })
  fdrSupported: boolean;

  @Metadata({ data: "json, name=hdmi_prefer_50hz_supported" })
  hdmiPrefer50hzSupported: boolean;

  @Metadata({ data: "json, name=hdmi_prefer_high_fps_supported" })
  hdmiPreferHighFpsSupported: boolean;

  @Metadata({ data: "json, name=hotspot_supported" })
  hotspotSupported: boolean;

  @Metadata({ data: "json, name=https_setup_supported" })
  httpsSetupSupported: boolean;

  @Metadata({ data: "json, name=input_management_supported" })
  inputManagementSupported: boolean;

  @Metadata({ data: "json, name=keep_hotspot_until_connected_supported" })
  keepHotspotUntilConnectedSupported: boolean;

  @Metadata({ data: "json, name=multi_user_supported" })
  multiUserSupported: boolean;

  @Metadata({ data: "json, name=multichannel_group_supported" })
  multichannelGroupSupported: boolean;

  @Metadata({ data: "json, name=multizone_supported" })
  multizoneSupported: boolean;

  @Metadata({ data: "json, name=night_mode_supported" })
  nightModeSupported: boolean;

  @Metadata({ data: "json, name=night_mode_supported_v2" })
  nightModeSupportedV2: boolean;

  @Metadata({ data: "json, name=opencast_supported" })
  opencastSupported: boolean;

  @Metadata({ data: "json, name=preview_channel_supported" })
  previewChannelSupported: boolean;

  @Metadata({ data: "json, name=reboot_supported" })
  rebootSupported: boolean;

  @Metadata({ data: "json, name=remote_ducking_supported" })
  remoteDuckingSupported: boolean;

  @Metadata({ data: "json, name=separate_tts_volume_supported" })
  separateTtsVolumeSupported: boolean;

  @Metadata({ data: "json, name=setup_supported" })
  setupSupported: boolean;

  @Metadata({ data: "json, name=sleep_mode_supported" })
  sleepModeSupported: boolean;

  @Metadata({ data: "json, name=stats_supported" })
  statsSupported: boolean;

  @Metadata({ data: "json, name=system_sound_effects_supported" })
  systemSoundEffectsSupported: boolean;

  @Metadata({ data: "json, name=user_eq_supported" })
  userEqSupported: boolean;

  @Metadata({ data: "json, name=wifi_auto_save_supported" })
  wifiAutoSaveSupported: boolean;

  @Metadata({ data: "json, name=wifi_regulatory_domain_locked" })
  wifiRegulatoryDomainLocked: boolean;

  @Metadata({ data: "json, name=wifi_supported" })
  wifiSupported: boolean;
}
