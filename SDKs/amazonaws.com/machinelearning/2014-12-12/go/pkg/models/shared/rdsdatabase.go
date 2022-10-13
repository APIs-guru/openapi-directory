package shared

type RdsDatabase struct {
	DatabaseName       string `json:"DatabaseName"`
	InstanceIdentifier string `json:"InstanceIdentifier"`
}
