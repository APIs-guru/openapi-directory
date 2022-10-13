package shared

type VMServer struct {
	VMManagerName   *string            `json:"vmManagerName"`
	VMManagerType   *VMManagerTypeEnum `json:"vmManagerType"`
	VMName          *string            `json:"vmName"`
	VMPath          *string            `json:"vmPath"`
	VMServerAddress *VMServerAddress   `json:"vmServerAddress"`
}
