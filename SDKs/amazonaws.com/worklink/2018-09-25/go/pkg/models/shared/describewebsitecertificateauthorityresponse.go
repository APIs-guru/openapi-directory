package shared

import (
	"time"
)

type DescribeWebsiteCertificateAuthorityResponse struct {
	Certificate *string    `json:"Certificate"`
	CreatedTime *time.Time `json:"CreatedTime"`
	DisplayName *string    `json:"DisplayName"`
}
