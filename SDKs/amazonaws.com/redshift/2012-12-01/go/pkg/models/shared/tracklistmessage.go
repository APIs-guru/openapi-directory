package shared

type TrackListMessage struct {
	MaintenanceTracks []MaintenanceTrack
	Marker            *string
}
