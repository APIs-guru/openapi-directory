package shared

type PrivateDNSNamespaceChange struct {
	Description *string                              `json:"Description"`
	Properties  *PrivateDNSNamespacePropertiesChange `json:"Properties"`
}
