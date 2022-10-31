package shared



type UpdateManagedInstanceRoleRequest struct {
    IamRole string `json:"IamRole"`
    InstanceID string `json:"InstanceId"`
    
}

