package shared

type AlgorithmValidationSpecification struct {
	ValidationProfiles []AlgorithmValidationProfile `json:"ValidationProfiles"`
	ValidationRole     string                       `json:"ValidationRole"`
}
