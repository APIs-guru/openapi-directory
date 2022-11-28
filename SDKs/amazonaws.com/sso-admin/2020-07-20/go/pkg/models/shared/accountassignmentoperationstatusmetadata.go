package shared

import (
	"time"
)

// AccountAssignmentOperationStatusMetadata
// Provides information about the <a>AccountAssignment</a> creation request.
type AccountAssignmentOperationStatusMetadata struct {
	CreatedDate *time.Time        `json:"CreatedDate,omitempty"`
	RequestID   *string           `json:"RequestId,omitempty"`
	Status      *StatusValuesEnum `json:"Status,omitempty"`
}
