package shared

import (
	"time"
)

type DomainDetails struct {
	CreationTime     *time.Time        `json:"CreationTime,omitempty"`
	DomainArn        *string           `json:"DomainArn,omitempty"`
	DomainID         *string           `json:"DomainId,omitempty"`
	DomainName       *string           `json:"DomainName,omitempty"`
	LastModifiedTime *time.Time        `json:"LastModifiedTime,omitempty"`
	Status           *DomainStatusEnum `json:"Status,omitempty"`
	URL              *string           `json:"Url,omitempty"`
}
