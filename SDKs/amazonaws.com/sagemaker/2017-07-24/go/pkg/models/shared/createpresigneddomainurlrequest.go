package shared

type CreatePresignedDomainURLRequest struct {
	DomainID                           string `json:"DomainId"`
	ExpiresInSeconds                   *int64 `json:"ExpiresInSeconds"`
	SessionExpirationDurationInSeconds *int64 `json:"SessionExpirationDurationInSeconds"`
	UserProfileName                    string `json:"UserProfileName"`
}
