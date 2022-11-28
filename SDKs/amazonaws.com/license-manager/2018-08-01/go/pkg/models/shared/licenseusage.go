package shared

// LicenseUsage
// Describes the entitlement usage associated with a license.
type LicenseUsage struct {
	EntitlementUsages []EntitlementUsage `json:"EntitlementUsages,omitempty"`
}
