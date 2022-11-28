package shared

// FailoverServer
// Failover server information
type FailoverServer struct {
	FailoverEnabled   bool   `json:"failoverEnabled"`
	FailoverIPAddress string `json:"failoverIpAddress"`
	FailoverPort      int32  `json:"failoverPort"`
}
