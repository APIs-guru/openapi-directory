package shared

type InstanceNetworking struct {
	MonthlyTransfer *MonthlyTransfer   `json:"monthlyTransfer"`
	Ports           []InstancePortInfo `json:"ports"`
}
