package shared

type FeedLinks struct {
	CurrentUser              *LinkWithType  `json:"current_user"`
	CurrentUserActor         *LinkWithType  `json:"current_user_actor"`
	CurrentUserOrganization  *LinkWithType  `json:"current_user_organization"`
	CurrentUserOrganizations []LinkWithType `json:"current_user_organizations"`
	CurrentUserPublic        *LinkWithType  `json:"current_user_public"`
	SecurityAdvisories       *LinkWithType  `json:"security_advisories"`
	Timeline                 LinkWithType   `json:"timeline"`
	User                     LinkWithType   `json:"user"`
}

type Feed struct {
	Links                       FeedLinks `json:"_links"`
	CurrentUserActorURL         *string   `json:"current_user_actor_url"`
	CurrentUserOrganizationURL  *string   `json:"current_user_organization_url"`
	CurrentUserOrganizationUrls []string  `json:"current_user_organization_urls"`
	CurrentUserPublicURL        *string   `json:"current_user_public_url"`
	CurrentUserURL              *string   `json:"current_user_url"`
	SecurityAdvisoriesURL       *string   `json:"security_advisories_url"`
	TimelineURL                 string    `json:"timeline_url"`
	UserURL                     string    `json:"user_url"`
}
