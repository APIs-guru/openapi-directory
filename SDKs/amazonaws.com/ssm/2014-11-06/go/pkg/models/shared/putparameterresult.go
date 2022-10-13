package shared

type PutParameterResult struct {
	Tier    *ParameterTierEnum `json:"Tier"`
	Version *int64             `json:"Version"`
}
