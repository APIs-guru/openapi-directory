package shared

// GoogleCloudApigeeV1Reference
// A Reference configuration. References must refer to a keystore that also exists in the parent environment.
type GoogleCloudApigeeV1Reference struct {
	Description  *string `json:"description,omitempty"`
	Name         *string `json:"name,omitempty"`
	Refers       *string `json:"refers,omitempty"`
	ResourceType *string `json:"resourceType,omitempty"`
}
