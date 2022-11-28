package shared

// FederatedUser
// Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the GetFederationToken operation of the Security Token Service (STS) API.
type FederatedUser struct {
	AccessKeyID    *string         `json:"accessKeyId,omitempty"`
	AccountID      *string         `json:"accountId,omitempty"`
	Arn            *string         `json:"arn,omitempty"`
	PrincipalID    *string         `json:"principalId,omitempty"`
	SessionContext *SessionContext `json:"sessionContext,omitempty"`
}
