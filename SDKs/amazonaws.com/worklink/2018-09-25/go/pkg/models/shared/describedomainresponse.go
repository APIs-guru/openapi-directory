package shared

import (
	"time"
)

type DescribeDomainResponse struct {
	AcmCertificateArn *string           `json:"AcmCertificateArn"`
	CreatedTime       *time.Time        `json:"CreatedTime"`
	DisplayName       *string           `json:"DisplayName"`
	DomainName        *string           `json:"DomainName"`
	DomainStatus      *DomainStatusEnum `json:"DomainStatus"`
}
