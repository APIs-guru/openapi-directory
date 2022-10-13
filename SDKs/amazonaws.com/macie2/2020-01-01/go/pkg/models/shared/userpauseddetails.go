package shared

import (
	"time"
)

type UserPausedDetails struct {
	JobExpiresAt                        *time.Time `json:"jobExpiresAt"`
	JobImminentExpirationHealthEventArn *string    `json:"jobImminentExpirationHealthEventArn"`
	JobPausedAt                         *time.Time `json:"jobPausedAt"`
}
