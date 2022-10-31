package shared

import (
"time")

type UpdatePlaceIndexResponse struct {
    IndexArn string `json:"IndexArn"`
    IndexName string `json:"IndexName"`
    UpdateTime time.Time `json:"UpdateTime"`
    
}

