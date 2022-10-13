package shared

type BatchDeletePrintServersResponse struct {
	FailedPrintServers []PrintServerFailureInfo `json:"failedPrintServers"`
	PrintServerIds     []string                 `json:"printServerIds"`
}
