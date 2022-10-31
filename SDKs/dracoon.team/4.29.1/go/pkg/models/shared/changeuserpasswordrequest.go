package shared



type ChangeUserPasswordRequest struct {
    NewPassword string `json:"newPassword"`
    OldPassword string `json:"oldPassword"`
    
}

