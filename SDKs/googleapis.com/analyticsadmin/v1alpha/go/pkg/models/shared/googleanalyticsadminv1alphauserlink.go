package shared

// GoogleAnalyticsAdminV1alphaUserLink
// A resource message representing a user's permissions on an Account or Property resource.
type GoogleAnalyticsAdminV1alphaUserLink struct {
	DirectRoles  []string `json:"directRoles,omitempty"`
	EmailAddress *string  `json:"emailAddress,omitempty"`
	Name         *string  `json:"name,omitempty"`
}

// GoogleAnalyticsAdminV1alphaUserLinkInput
// A resource message representing a user's permissions on an Account or Property resource.
type GoogleAnalyticsAdminV1alphaUserLinkInput struct {
	DirectRoles  []string `json:"directRoles,omitempty"`
	EmailAddress *string  `json:"emailAddress,omitempty"`
}
