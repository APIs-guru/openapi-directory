package shared

// ModelPackageValidationProfile
// <p>Contains data, such as the inputs and targeted instance types that are used in the process of validating the model package.</p> <p>The data provided in the validation profile is made available to your buyers on Amazon Web Services Marketplace.</p>
type ModelPackageValidationProfile struct {
	ProfileName            string                 `json:"ProfileName"`
	TransformJobDefinition TransformJobDefinition `json:"TransformJobDefinition"`
}
