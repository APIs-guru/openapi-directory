package shared

import (
"time")

type UserDeletionRequestID struct {
    Type *string `json:"type,omitempty"`
    UserID *string `json:"userId,omitempty"`
    
}

type UserDeletionRequest struct {
    DeletionRequestTime *time.Time `json:"deletionRequestTime,omitempty"`
    FirebaseProjectID *string `json:"firebaseProjectId,omitempty"`
    ID *UserDeletionRequestID `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    PropertyID *string `json:"propertyId,omitempty"`
    WebPropertyID *string `json:"webPropertyId,omitempty"`
    
}

