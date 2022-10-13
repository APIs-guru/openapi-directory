package shared

type RegisterVolumeRequest struct {
	Ec2VolumeID *string `json:"Ec2VolumeId"`
	StackID     string  `json:"StackId"`
}
