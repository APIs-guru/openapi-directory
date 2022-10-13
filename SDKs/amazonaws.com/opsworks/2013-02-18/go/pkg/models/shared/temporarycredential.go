package shared

type TemporaryCredential struct {
	InstanceID        *string `json:"InstanceId"`
	Password          *string `json:"Password"`
	Username          *string `json:"Username"`
	ValidForInMinutes *int64  `json:"ValidForInMinutes"`
}
