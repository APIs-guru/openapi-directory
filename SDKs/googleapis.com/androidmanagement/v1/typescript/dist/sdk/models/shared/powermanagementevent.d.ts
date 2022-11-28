import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PowerManagementEventEventTypeEnum {
    PowerManagementEventTypeUnspecified = "POWER_MANAGEMENT_EVENT_TYPE_UNSPECIFIED",
    BatteryLevelCollected = "BATTERY_LEVEL_COLLECTED",
    PowerConnected = "POWER_CONNECTED",
    PowerDisconnected = "POWER_DISCONNECTED",
    BatteryLow = "BATTERY_LOW",
    BatteryOkay = "BATTERY_OKAY",
    BootCompleted = "BOOT_COMPLETED",
    Shutdown = "SHUTDOWN"
}
/**
 * A power management event.
**/
export declare class PowerManagementEvent extends SpeakeasyBase {
    batteryLevel?: number;
    createTime?: string;
    eventType?: PowerManagementEventEventTypeEnum;
}
