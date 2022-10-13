package shared

import (
	"time"
)

type DomainDetails struct {
	CreationTime     *time.Time        `json:"CreationTime"`
	DomainArn        *string           `json:"DomainArn"`
	DomainID         *string           `json:"DomainId"`
	DomainName       *string           `json:"DomainName"`
	LastModifiedTime *time.Time        `json:"LastModifiedTime"`
	Status           *DomainStatusEnum `json:"Status"`
	URL              *string           `json:"Url"`
}
