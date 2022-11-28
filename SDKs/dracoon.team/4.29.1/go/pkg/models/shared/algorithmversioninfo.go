package shared

type AlgorithmVersionInfoStatusEnum string

const (
	AlgorithmVersionInfoStatusEnumRequired    AlgorithmVersionInfoStatusEnum = "REQUIRED"
	AlgorithmVersionInfoStatusEnumDiscouraged AlgorithmVersionInfoStatusEnum = "DISCOURAGED"
)

// AlgorithmVersionInfo
// Algorithm information
type AlgorithmVersionInfo struct {
	Description string                         `json:"description"`
	Status      AlgorithmVersionInfoStatusEnum `json:"status"`
	Version     string                         `json:"version"`
}
