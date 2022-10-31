package shared




type PendingAssignmentStateEnum string

const (
    PendingAssignmentStateEnumAccepted PendingAssignmentStateEnum = "ACCEPTED"
PendingAssignmentStateEnumDenied PendingAssignmentStateEnum = "DENIED"
PendingAssignmentStateEnumWaiting PendingAssignmentStateEnum = "WAITING"
)


type PendingAssignment struct {
    GroupID int64 `json:"groupId"`
    RoomID int64 `json:"roomId"`
    RoomName string `json:"roomName"`
    State PendingAssignmentStateEnum `json:"state"`
    UserID int64 `json:"userId"`
    
}

