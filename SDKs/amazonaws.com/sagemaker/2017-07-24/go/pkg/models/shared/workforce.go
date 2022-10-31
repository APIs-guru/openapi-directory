package shared

import (
"time")

type Workforce struct {
    CognitoConfig *CognitoConfig `json:"CognitoConfig,omitempty"`
    CreateDate *time.Time `json:"CreateDate,omitempty"`
    LastUpdatedDate *time.Time `json:"LastUpdatedDate,omitempty"`
    OidcConfig *OidcConfigForResponse `json:"OidcConfig,omitempty"`
    SourceIPConfig *SourceIPConfig `json:"SourceIpConfig,omitempty"`
    SubDomain *string `json:"SubDomain,omitempty"`
    WorkforceArn string `json:"WorkforceArn"`
    WorkforceName string `json:"WorkforceName"`
    
}

