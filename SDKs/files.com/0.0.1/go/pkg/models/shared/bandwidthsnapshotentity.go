package shared

import (
	"time"
)

type BandwidthSnapshotEntity struct {
	BytesReceived     *float64   `json:"bytes_received"`
	BytesSent         *float64   `json:"bytes_sent"`
	CreatedAt         *time.Time `json:"created_at"`
	ID                *int32     `json:"id"`
	LoggedAt          *time.Time `json:"logged_at"`
	RequestsGet       *float64   `json:"requests_get"`
	RequestsOther     *float64   `json:"requests_other"`
	RequestsPut       *float64   `json:"requests_put"`
	SyncBytesReceived *float64   `json:"sync_bytes_received"`
	SyncBytesSent     *float64   `json:"sync_bytes_sent"`
	UpdatedAt         *time.Time `json:"updated_at"`
}
