package shared

// GoogleAnalyticsAdminV1alphaFirebaseLink
// A link between a GA4 property and a Firebase project.
type GoogleAnalyticsAdminV1alphaFirebaseLink struct {
	CreateTime *string `json:"createTime,omitempty"`
	Name       *string `json:"name,omitempty"`
	Project    *string `json:"project,omitempty"`
}

// GoogleAnalyticsAdminV1alphaFirebaseLinkInput
// A link between a GA4 property and a Firebase project.
type GoogleAnalyticsAdminV1alphaFirebaseLinkInput struct {
	Project *string `json:"project,omitempty"`
}
