package shared

type ModelPackageValidationSpecification struct {
	ValidationProfiles []ModelPackageValidationProfile `json:"ValidationProfiles"`
	ValidationRole     string                          `json:"ValidationRole"`
}
