import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Settings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=closed_caption" })
  closedCaption: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=control_notifications" })
  controlNotifications: number;

  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale: string;

  @SpeakeasyMetadata({ data: "json, name=network_standby" })
  networkStandby: number;

  @SpeakeasyMetadata({ data: "json, name=system_sound_effects" })
  systemSoundEffects: boolean;

  @SpeakeasyMetadata({ data: "json, name=time_format" })
  timeFormat: number;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone: string;

  @SpeakeasyMetadata({ data: "json, name=wake_on_cast" })
  wakeOnCast: number;
}
