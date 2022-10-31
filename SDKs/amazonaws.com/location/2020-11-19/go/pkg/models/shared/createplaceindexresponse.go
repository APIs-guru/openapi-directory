package shared

import (
	"time"
)

type CreatePlaceIndexResponse struct {
	CreateTime time.Time `json:"CreateTime"`
	IndexArn   string    `json:"IndexArn"`
	IndexName  string    `json:"IndexName"`
}
