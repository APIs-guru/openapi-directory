package shared

// CreateEmailIdentityResponse
// <p>If the email identity is a domain, this object contains information about the DKIM verification status for the domain.</p> <p>If the email identity is an email address, this object is empty. </p>
type CreateEmailIdentityResponse struct {
	DkimAttributes           *DkimAttributes   `json:"DkimAttributes,omitempty"`
	IdentityType             *IdentityTypeEnum `json:"IdentityType,omitempty"`
	VerifiedForSendingStatus *bool             `json:"VerifiedForSendingStatus,omitempty"`
}
