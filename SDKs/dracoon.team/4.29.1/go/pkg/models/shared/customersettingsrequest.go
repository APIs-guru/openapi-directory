package shared

type CustomerSettingsRequest struct {
	HomeRoomParentName *string `json:"homeRoomParentName"`
	HomeRoomQuota      *int64  `json:"homeRoomQuota"`
	HomeRoomsActive    *bool   `json:"homeRoomsActive"`
}
