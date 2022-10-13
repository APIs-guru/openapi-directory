package shared

type PortRange struct {
	FromPort int64 `json:"FromPort"`
	ToPort   int64 `json:"ToPort"`
}
