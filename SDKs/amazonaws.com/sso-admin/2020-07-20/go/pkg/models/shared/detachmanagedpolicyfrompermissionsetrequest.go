package shared



type DetachManagedPolicyFromPermissionSetRequest struct {
    InstanceArn string `json:"InstanceArn"`
    ManagedPolicyArn string `json:"ManagedPolicyArn"`
    PermissionSetArn string `json:"PermissionSetArn"`
    
}

