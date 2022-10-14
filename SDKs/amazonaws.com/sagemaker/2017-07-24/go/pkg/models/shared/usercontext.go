package shared

type UserContext struct {
	DomainID        *string `json:"DomainId,omitempty"`
	UserProfileArn  *string `json:"UserProfileArn,omitempty"`
	UserProfileName *string `json:"UserProfileName,omitempty"`
}
