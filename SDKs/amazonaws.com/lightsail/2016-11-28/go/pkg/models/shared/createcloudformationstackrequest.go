package shared



type CreateCloudFormationStackRequest struct {
    Instances []InstanceEntry `json:"instances"`
    
}

