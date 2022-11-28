package shared

type PendingMaintenanceActionsMessage struct {
	Marker                    *string
	PendingMaintenanceActions []ResourcePendingMaintenanceActions
}
