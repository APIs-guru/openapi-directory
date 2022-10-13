package shared

import (
	"time"
)

type UserDeletionRequestID struct {
	Type   *string `json:"type"`
	UserID *string `json:"userId"`
}

type UserDeletionRequest struct {
	DeletionRequestTime *time.Time             `json:"deletionRequestTime"`
	FirebaseProjectID   *string                `json:"firebaseProjectId"`
	ID                  *UserDeletionRequestID `json:"id"`
	Kind                *string                `json:"kind"`
	PropertyID          *string                `json:"propertyId"`
	WebPropertyID       *string                `json:"webPropertyId"`
}
