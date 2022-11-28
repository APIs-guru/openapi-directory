package shared

import (
	"time"
)

// ClusterCredentials
// Temporary credentials with authorization to log on to an Amazon Redshift database.
type ClusterCredentials struct {
	DbPassword *string
	DbUser     *string
	Expiration *time.Time
}
