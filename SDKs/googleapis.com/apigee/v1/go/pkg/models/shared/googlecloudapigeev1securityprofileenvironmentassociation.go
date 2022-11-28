package shared

// GoogleCloudApigeeV1SecurityProfileEnvironmentAssociationInput
// Represents a SecurityProfileEnvironmentAssociation resource.
type GoogleCloudApigeeV1SecurityProfileEnvironmentAssociationInput struct {
	Name                      *string `json:"name,omitempty"`
	SecurityProfileRevisionID *string `json:"securityProfileRevisionId,omitempty"`
}

// GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation
// Represents a SecurityProfileEnvironmentAssociation resource.
type GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation struct {
	AttachTime                *string `json:"attachTime,omitempty"`
	Name                      *string `json:"name,omitempty"`
	SecurityProfileRevisionID *string `json:"securityProfileRevisionId,omitempty"`
}
