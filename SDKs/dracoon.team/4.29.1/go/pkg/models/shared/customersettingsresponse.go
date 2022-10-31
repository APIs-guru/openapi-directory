package shared



type CustomerSettingsResponse struct {
    HomeRoomParentID *int64 `json:"homeRoomParentId,omitempty"`
    HomeRoomParentName *string `json:"homeRoomParentName,omitempty"`
    HomeRoomQuota *int64 `json:"homeRoomQuota,omitempty"`
    HomeRoomsActive bool `json:"homeRoomsActive"`
    
}

