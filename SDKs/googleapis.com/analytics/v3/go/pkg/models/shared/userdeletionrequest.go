package shared

import (
	"time"
)

// UserDeletionRequestID
// User ID.
type UserDeletionRequestID struct {
	Type   *string `json:"type,omitempty"`
	UserID *string `json:"userId,omitempty"`
}

// UserDeletionRequest
// JSON template for a user deletion request resource.
type UserDeletionRequest struct {
	DeletionRequestTime *time.Time             `json:"deletionRequestTime,omitempty"`
	FirebaseProjectID   *string                `json:"firebaseProjectId,omitempty"`
	ID                  *UserDeletionRequestID `json:"id,omitempty"`
	Kind                *string                `json:"kind,omitempty"`
	PropertyID          *string                `json:"propertyId,omitempty"`
	WebPropertyID       *string                `json:"webPropertyId,omitempty"`
}

// UserDeletionRequestInput
// JSON template for a user deletion request resource.
type UserDeletionRequestInput struct {
	FirebaseProjectID *string                `json:"firebaseProjectId,omitempty"`
	ID                *UserDeletionRequestID `json:"id,omitempty"`
	Kind              *string                `json:"kind,omitempty"`
	PropertyID        *string                `json:"propertyId,omitempty"`
	WebPropertyID     *string                `json:"webPropertyId,omitempty"`
}
