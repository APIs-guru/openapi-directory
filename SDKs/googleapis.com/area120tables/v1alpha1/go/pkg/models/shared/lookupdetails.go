package shared

// LookupDetails
// Details about a lookup column whose value comes from the associated relationship.
type LookupDetails struct {
	RelationshipColumn   *string `json:"relationshipColumn,omitempty"`
	RelationshipColumnID *string `json:"relationshipColumnId,omitempty"`
}
