package shared



type RoomUsersAddBatchRequestItem struct {
    ID int64 `json:"id"`
    Permissions NodePermissions `json:"permissions"`
    
}

