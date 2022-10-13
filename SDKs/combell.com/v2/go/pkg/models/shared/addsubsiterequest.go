package shared

type AddSubsiteRequest struct {
	DomainName *string `json:"domain_name"`
	Path       *string `json:"path"`
}
