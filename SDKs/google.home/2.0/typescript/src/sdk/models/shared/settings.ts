import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Settings extends SpeakeasyBase {
  @Metadata({ data: "json, name=closed_caption" })
  closedCaption: Map<string, any>;

  @Metadata({ data: "json, name=control_notifications" })
  controlNotifications: number;

  @Metadata({ data: "json, name=country_code" })
  countryCode: string;

  @Metadata({ data: "json, name=locale" })
  locale: string;

  @Metadata({ data: "json, name=network_standby" })
  networkStandby: number;

  @Metadata({ data: "json, name=system_sound_effects" })
  systemSoundEffects: boolean;

  @Metadata({ data: "json, name=time_format" })
  timeFormat: number;

  @Metadata({ data: "json, name=timezone" })
  timezone: string;

  @Metadata({ data: "json, name=wake_on_cast" })
  wakeOnCast: number;
}
