package shared

type CustomerSettingsResponse struct {
	HomeRoomParentID   *int64  `json:"homeRoomParentId"`
	HomeRoomParentName *string `json:"homeRoomParentName"`
	HomeRoomQuota      *int64  `json:"homeRoomQuota"`
	HomeRoomsActive    bool    `json:"homeRoomsActive"`
}
