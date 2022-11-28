package shared

// ModelPackageValidationSpecification
// Specifies batch transform jobs that Amazon SageMaker runs to validate your model package.
type ModelPackageValidationSpecification struct {
	ValidationProfiles []ModelPackageValidationProfile `json:"ValidationProfiles"`
	ValidationRole     string                          `json:"ValidationRole"`
}
