package shared

// InstanceAccessControlAttributeConfiguration
// Specifies the attributes to add to your attribute-based access control (ABAC) configuration.
type InstanceAccessControlAttributeConfiguration struct {
	AccessControlAttributes []AccessControlAttribute `json:"AccessControlAttributes"`
}
