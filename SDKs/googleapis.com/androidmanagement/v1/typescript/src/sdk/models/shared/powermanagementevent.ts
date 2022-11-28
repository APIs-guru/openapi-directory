import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PowerManagementEventEventTypeEnum {
    PowerManagementEventTypeUnspecified = "POWER_MANAGEMENT_EVENT_TYPE_UNSPECIFIED",
    BatteryLevelCollected = "BATTERY_LEVEL_COLLECTED",
    PowerConnected = "POWER_CONNECTED",
    PowerDisconnected = "POWER_DISCONNECTED",
    BatteryLow = "BATTERY_LOW",
    BatteryOkay = "BATTERY_OKAY",
    BootCompleted = "BOOT_COMPLETED",
    Shutdown = "SHUTDOWN"
}


// PowerManagementEvent
/** 
 * A power management event.
**/
export class PowerManagementEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batteryLevel" })
  batteryLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: PowerManagementEventEventTypeEnum;
}
