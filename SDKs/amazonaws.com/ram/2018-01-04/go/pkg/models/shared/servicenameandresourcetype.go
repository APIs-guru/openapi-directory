package shared

// ServiceNameAndResourceType
// Information about the shareable resource types and the Amazon Web Services services to which they belong.
type ServiceNameAndResourceType struct {
	ResourceType *string `json:"resourceType,omitempty"`
	ServiceName  *string `json:"serviceName,omitempty"`
}
