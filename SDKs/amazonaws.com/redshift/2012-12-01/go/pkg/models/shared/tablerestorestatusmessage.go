package shared

// TableRestoreStatusMessage
// <p/>
type TableRestoreStatusMessage struct {
	Marker                    *string
	TableRestoreStatusDetails []TableRestoreStatus
}
