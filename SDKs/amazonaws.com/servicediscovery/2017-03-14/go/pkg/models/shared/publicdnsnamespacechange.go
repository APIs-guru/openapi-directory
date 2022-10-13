package shared

type PublicDNSNamespaceChange struct {
	Description *string                             `json:"Description"`
	Properties  *PublicDNSNamespacePropertiesChange `json:"Properties"`
}
