package shared

type Destination struct {
	BccAddresses []string `json:"BccAddresses"`
	CcAddresses  []string `json:"CcAddresses"`
	ToAddresses  []string `json:"ToAddresses"`
}
