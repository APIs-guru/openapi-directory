package shared




type PendingAssignmentDataStateEnum string

const (
    PendingAssignmentDataStateEnumAccepted PendingAssignmentDataStateEnum = "ACCEPTED"
PendingAssignmentDataStateEnumDenied PendingAssignmentDataStateEnum = "DENIED"
PendingAssignmentDataStateEnumWaiting PendingAssignmentDataStateEnum = "WAITING"
)


type PendingAssignmentData struct {
    GroupID *int64 `json:"groupId,omitempty"`
    GroupInfo GroupInfo `json:"groupInfo"`
    PendingGroupData PendingGroupData `json:"pendingGroupData"`
    PendingUserData PendingUserData `json:"pendingUserData"`
    RoomID int64 `json:"roomId"`
    RoomName string `json:"roomName"`
    State PendingAssignmentDataStateEnum `json:"state"`
    UserID *int64 `json:"userId,omitempty"`
    UserInfo UserInfo `json:"userInfo"`
    
}

