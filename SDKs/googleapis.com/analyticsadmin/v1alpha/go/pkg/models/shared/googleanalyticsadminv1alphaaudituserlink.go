package shared

type GoogleAnalyticsAdminV1alphaAuditUserLink struct {
	DirectRoles    []string `json:"directRoles"`
	EffectiveRoles []string `json:"effectiveRoles"`
	EmailAddress   *string  `json:"emailAddress"`
	Name           *string  `json:"name"`
}
