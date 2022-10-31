package shared

import (
"time")

type DescribeWebsiteCertificateAuthorityResponse struct {
    Certificate *string `json:"Certificate,omitempty"`
    CreatedTime *time.Time `json:"CreatedTime,omitempty"`
    DisplayName *string `json:"DisplayName,omitempty"`
    
}

