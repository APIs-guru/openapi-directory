package shared

type ResolverDnssecConfig struct {
	ID               *string                             `json:"Id,omitempty"`
	OwnerID          *string                             `json:"OwnerId,omitempty"`
	ResourceID       *string                             `json:"ResourceId,omitempty"`
	ValidationStatus *ResolverDnssecValidationStatusEnum `json:"ValidationStatus,omitempty"`
}
