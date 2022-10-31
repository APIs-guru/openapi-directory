package shared

type CreatePresignedDomainURLRequest struct {
	DomainID                           string `json:"DomainId"`
	ExpiresInSeconds                   *int64 `json:"ExpiresInSeconds,omitempty"`
	SessionExpirationDurationInSeconds *int64 `json:"SessionExpirationDurationInSeconds,omitempty"`
	UserProfileName                    string `json:"UserProfileName"`
}
