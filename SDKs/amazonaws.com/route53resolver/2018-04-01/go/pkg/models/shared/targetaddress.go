package shared

type TargetAddress struct {
	IP   string `json:"Ip"`
	Port *int64 `json:"Port,omitempty"`
}
