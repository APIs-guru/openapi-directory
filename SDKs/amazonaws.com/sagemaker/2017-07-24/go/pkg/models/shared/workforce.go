package shared

import (
	"time"
)

type Workforce struct {
	CognitoConfig   *CognitoConfig         `json:"CognitoConfig"`
	CreateDate      *time.Time             `json:"CreateDate"`
	LastUpdatedDate *time.Time             `json:"LastUpdatedDate"`
	OidcConfig      *OidcConfigForResponse `json:"OidcConfig"`
	SourceIPConfig  *SourceIPConfig        `json:"SourceIpConfig"`
	SubDomain       *string                `json:"SubDomain"`
	WorkforceArn    string                 `json:"WorkforceArn"`
	WorkforceName   string                 `json:"WorkforceName"`
}
