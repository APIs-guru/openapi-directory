package shared

import (
	"time"
)

type BandwidthSnapshotEntity struct {
	BytesReceived     *float64   `json:"bytes_received,omitempty"`
	BytesSent         *float64   `json:"bytes_sent,omitempty"`
	CreatedAt         *time.Time `json:"created_at,omitempty"`
	ID                *int32     `json:"id,omitempty"`
	LoggedAt          *time.Time `json:"logged_at,omitempty"`
	RequestsGet       *float64   `json:"requests_get,omitempty"`
	RequestsOther     *float64   `json:"requests_other,omitempty"`
	RequestsPut       *float64   `json:"requests_put,omitempty"`
	SyncBytesReceived *float64   `json:"sync_bytes_received,omitempty"`
	SyncBytesSent     *float64   `json:"sync_bytes_sent,omitempty"`
	UpdatedAt         *time.Time `json:"updated_at,omitempty"`
}
