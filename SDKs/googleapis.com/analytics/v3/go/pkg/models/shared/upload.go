package shared

import (
	"time"
)

type Upload struct {
	AccountID          *string    `json:"accountId"`
	CustomDataSourceID *string    `json:"customDataSourceId"`
	Errors             []string   `json:"errors"`
	ID                 *string    `json:"id"`
	Kind               *string    `json:"kind"`
	Status             *string    `json:"status"`
	UploadTime         *time.Time `json:"uploadTime"`
}
