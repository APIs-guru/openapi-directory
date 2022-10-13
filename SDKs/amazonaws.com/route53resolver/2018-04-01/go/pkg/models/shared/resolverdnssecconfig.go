package shared

type ResolverDnssecConfig struct {
	ID               *string                             `json:"Id"`
	OwnerID          *string                             `json:"OwnerId"`
	ResourceID       *string                             `json:"ResourceId"`
	ValidationStatus *ResolverDnssecValidationStatusEnum `json:"ValidationStatus"`
}
