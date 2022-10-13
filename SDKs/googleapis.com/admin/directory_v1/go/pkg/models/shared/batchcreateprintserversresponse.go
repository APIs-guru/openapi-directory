package shared

type BatchCreatePrintServersResponse struct {
	Failures     []PrintServerFailureInfo `json:"failures"`
	PrintServers []PrintServer            `json:"printServers"`
}
