package shared

import (
"time")

type UpdateMapResponse struct {
    MapArn string `json:"MapArn"`
    MapName string `json:"MapName"`
    UpdateTime time.Time `json:"UpdateTime"`
    
}

