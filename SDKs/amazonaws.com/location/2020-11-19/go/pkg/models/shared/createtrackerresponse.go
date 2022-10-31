package shared

import (
"time")

type CreateTrackerResponse struct {
    CreateTime time.Time `json:"CreateTime"`
    TrackerArn string `json:"TrackerArn"`
    TrackerName string `json:"TrackerName"`
    
}

