package shared




type PowerManagementEventEventTypeEnum string

const (
    PowerManagementEventEventTypeEnumPowerManagementEventTypeUnspecified PowerManagementEventEventTypeEnum = "POWER_MANAGEMENT_EVENT_TYPE_UNSPECIFIED"
PowerManagementEventEventTypeEnumBatteryLevelCollected PowerManagementEventEventTypeEnum = "BATTERY_LEVEL_COLLECTED"
PowerManagementEventEventTypeEnumPowerConnected PowerManagementEventEventTypeEnum = "POWER_CONNECTED"
PowerManagementEventEventTypeEnumPowerDisconnected PowerManagementEventEventTypeEnum = "POWER_DISCONNECTED"
PowerManagementEventEventTypeEnumBatteryLow PowerManagementEventEventTypeEnum = "BATTERY_LOW"
PowerManagementEventEventTypeEnumBatteryOkay PowerManagementEventEventTypeEnum = "BATTERY_OKAY"
PowerManagementEventEventTypeEnumBootCompleted PowerManagementEventEventTypeEnum = "BOOT_COMPLETED"
PowerManagementEventEventTypeEnumShutdown PowerManagementEventEventTypeEnum = "SHUTDOWN"
)


type PowerManagementEvent struct {
    BatteryLevel *float32 `json:"batteryLevel,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    EventType *PowerManagementEventEventTypeEnum `json:"eventType,omitempty"`
    
}

