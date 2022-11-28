package shared

// CustomerSettingsRequest
// Request model for setting the customer settings
type CustomerSettingsRequest struct {
	HomeRoomParentName *string `json:"homeRoomParentName,omitempty"`
	HomeRoomQuota      *int64  `json:"homeRoomQuota,omitempty"`
	HomeRoomsActive    *bool   `json:"homeRoomsActive,omitempty"`
}
