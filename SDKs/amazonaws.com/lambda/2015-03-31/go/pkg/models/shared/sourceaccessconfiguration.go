package shared

// SourceAccessConfiguration
// To secure and define access to your event source, you can specify the authentication protocol, VPC components, or virtual host.
type SourceAccessConfiguration struct {
	Type *SourceAccessTypeEnum `json:"Type,omitempty"`
	URI  *string               `json:"URI,omitempty"`
}
