package shared

// AccessControlAttribute
// These are Amazon Web Services SSO identity store attributes that you can configure for use in attributes-based access control (ABAC). You can create permissions policies that determine who can access your Amazon Web Services resources based upon the configured attribute values. When you enable ABAC and specify <code>AccessControlAttributes</code>, Amazon Web Services SSO passes the attribute values of the authenticated user into IAM for use in policy evaluation.
type AccessControlAttribute struct {
	Key   string                      `json:"Key"`
	Value AccessControlAttributeValue `json:"Value"`
}
