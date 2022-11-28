package shared

import (
	"time"
)

// Credentials
// Amazon Web Services credentials for API authentication.
type Credentials struct {
	AccessKeyID     string
	Expiration      time.Time
	SecretAccessKey string
	SessionToken    string
}
