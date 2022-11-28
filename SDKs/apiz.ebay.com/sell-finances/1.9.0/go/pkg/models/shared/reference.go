package shared

// Reference
// This field is returned for NON_SALE_CHARGE transactions that contain non-transactional seller fees.
type Reference struct {
	ReferenceID   *string `json:"referenceId,omitempty"`
	ReferenceType *string `json:"referenceType,omitempty"`
}
