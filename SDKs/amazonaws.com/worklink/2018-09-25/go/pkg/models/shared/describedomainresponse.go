package shared

import (
	"time"
)

type DescribeDomainResponse struct {
	AcmCertificateArn *string           `json:"AcmCertificateArn,omitempty"`
	CreatedTime       *time.Time        `json:"CreatedTime,omitempty"`
	DisplayName       *string           `json:"DisplayName,omitempty"`
	DomainName        *string           `json:"DomainName,omitempty"`
	DomainStatus      *DomainStatusEnum `json:"DomainStatus,omitempty"`
}
