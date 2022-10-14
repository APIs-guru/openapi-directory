package shared

import (
	"time"
)

type UserPausedDetails struct {
	JobExpiresAt                        *time.Time `json:"jobExpiresAt,omitempty"`
	JobImminentExpirationHealthEventArn *string    `json:"jobImminentExpirationHealthEventArn,omitempty"`
	JobPausedAt                         *time.Time `json:"jobPausedAt,omitempty"`
}
