package shared

// PendingMaintenanceActionsMessage
// Data returned from the <b>DescribePendingMaintenanceActions</b> action.
type PendingMaintenanceActionsMessage struct {
	Marker                    *string
	PendingMaintenanceActions []ResourcePendingMaintenanceActions
}
