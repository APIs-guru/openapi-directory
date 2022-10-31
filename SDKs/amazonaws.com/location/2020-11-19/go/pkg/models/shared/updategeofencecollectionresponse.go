package shared

import (
"time")

type UpdateGeofenceCollectionResponse struct {
    CollectionArn string `json:"CollectionArn"`
    CollectionName string `json:"CollectionName"`
    UpdateTime time.Time `json:"UpdateTime"`
    
}

