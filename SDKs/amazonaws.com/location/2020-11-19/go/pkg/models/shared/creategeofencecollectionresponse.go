package shared

import (
"time")

type CreateGeofenceCollectionResponse struct {
    CollectionArn string `json:"CollectionArn"`
    CollectionName string `json:"CollectionName"`
    CreateTime time.Time `json:"CreateTime"`
    
}

