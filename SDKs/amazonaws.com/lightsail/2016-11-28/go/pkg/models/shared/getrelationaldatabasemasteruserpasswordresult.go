package shared

import (
	"time"
)

type GetRelationalDatabaseMasterUserPasswordResult struct {
	CreatedAt          *time.Time `json:"createdAt"`
	MasterUserPassword *string    `json:"masterUserPassword"`
}
