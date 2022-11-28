package shared

// ResolverDnssecConfig
// A complex type that contains information about a configuration for DNSSEC validation.
type ResolverDnssecConfig struct {
	ID               *string                             `json:"Id,omitempty"`
	OwnerID          *string                             `json:"OwnerId,omitempty"`
	ResourceID       *string                             `json:"ResourceId,omitempty"`
	ValidationStatus *ResolverDnssecValidationStatusEnum `json:"ValidationStatus,omitempty"`
}
