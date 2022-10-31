package shared

import (
"time")

type CreateMapResponse struct {
    CreateTime time.Time `json:"CreateTime"`
    MapArn string `json:"MapArn"`
    MapName string `json:"MapName"`
    
}

