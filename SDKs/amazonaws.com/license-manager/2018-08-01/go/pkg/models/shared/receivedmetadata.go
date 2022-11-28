package shared

// ReceivedMetadata
// Metadata associated with received licenses and grants.
type ReceivedMetadata struct {
	AllowedOperations    []AllowedOperationEnum `json:"AllowedOperations,omitempty"`
	ReceivedStatus       *ReceivedStatusEnum    `json:"ReceivedStatus,omitempty"`
	ReceivedStatusReason *string                `json:"ReceivedStatusReason,omitempty"`
}
