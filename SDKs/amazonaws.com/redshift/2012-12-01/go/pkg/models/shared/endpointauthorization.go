package shared

import (
	"time"
)

// EndpointAuthorization
// Describes an endpoint authorization for authorizing Redshift-managed VPC endpoint access to a cluster across Amazon Web Services accounts.
type EndpointAuthorization struct {
	AllowedAllVpCs    *bool
	AllowedVpCs       []string
	AuthorizeTime     *time.Time
	ClusterIdentifier *string
	ClusterStatus     *string
	EndpointCount     *int64
	Grantee           *string
	Grantor           *string
	Status            *AuthorizationStatusEnum
}
