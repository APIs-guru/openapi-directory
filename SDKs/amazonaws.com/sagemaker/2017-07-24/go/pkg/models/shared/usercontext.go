package shared

type UserContext struct {
	DomainID        *string `json:"DomainId"`
	UserProfileArn  *string `json:"UserProfileArn"`
	UserProfileName *string `json:"UserProfileName"`
}
