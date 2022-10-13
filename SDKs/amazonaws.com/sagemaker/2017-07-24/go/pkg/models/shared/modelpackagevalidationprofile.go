package shared

type ModelPackageValidationProfile struct {
	ProfileName            string                 `json:"ProfileName"`
	TransformJobDefinition TransformJobDefinition `json:"TransformJobDefinition"`
}
