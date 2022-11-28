package shared

// ApigatewayTestIamPermissionsRequest
// Request message for `TestIamPermissions` method.
type ApigatewayTestIamPermissionsRequest struct {
	Permissions []string `json:"permissions,omitempty"`
}
