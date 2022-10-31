package shared



type RegisterVolumeRequest struct {
    Ec2VolumeID *string `json:"Ec2VolumeId,omitempty"`
    StackID string `json:"StackId"`
    
}

