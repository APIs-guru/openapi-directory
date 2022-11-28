package shared

// TemporaryCredential
// Contains the data needed by RDP clients such as the Microsoft Remote Desktop Connection to log in to the instance.
type TemporaryCredential struct {
	InstanceID        *string `json:"InstanceId,omitempty"`
	Password          *string `json:"Password,omitempty"`
	Username          *string `json:"Username,omitempty"`
	ValidForInMinutes *int64  `json:"ValidForInMinutes,omitempty"`
}
