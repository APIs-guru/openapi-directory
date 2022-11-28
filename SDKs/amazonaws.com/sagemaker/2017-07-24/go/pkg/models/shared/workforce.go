package shared

import (
	"time"
)

// Workforce
// A single private workforce, which is automatically created when you create your first private work team. You can create one private work force in each Amazon Web Services Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.
type Workforce struct {
	CognitoConfig   *CognitoConfig         `json:"CognitoConfig,omitempty"`
	CreateDate      *time.Time             `json:"CreateDate,omitempty"`
	LastUpdatedDate *time.Time             `json:"LastUpdatedDate,omitempty"`
	OidcConfig      *OidcConfigForResponse `json:"OidcConfig,omitempty"`
	SourceIPConfig  *SourceIPConfig        `json:"SourceIpConfig,omitempty"`
	SubDomain       *string                `json:"SubDomain,omitempty"`
	WorkforceArn    string                 `json:"WorkforceArn"`
	WorkforceName   string                 `json:"WorkforceName"`
}
