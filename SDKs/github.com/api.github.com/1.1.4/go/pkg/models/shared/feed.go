package shared

type FeedLinks struct {
	CurrentUser              *LinkWithType  `json:"current_user,omitempty"`
	CurrentUserActor         *LinkWithType  `json:"current_user_actor,omitempty"`
	CurrentUserOrganization  *LinkWithType  `json:"current_user_organization,omitempty"`
	CurrentUserOrganizations []LinkWithType `json:"current_user_organizations,omitempty"`
	CurrentUserPublic        *LinkWithType  `json:"current_user_public,omitempty"`
	SecurityAdvisories       *LinkWithType  `json:"security_advisories,omitempty"`
	Timeline                 LinkWithType   `json:"timeline"`
	User                     LinkWithType   `json:"user"`
}

type Feed struct {
	Links                       FeedLinks `json:"_links"`
	CurrentUserActorURL         *string   `json:"current_user_actor_url,omitempty"`
	CurrentUserOrganizationURL  *string   `json:"current_user_organization_url,omitempty"`
	CurrentUserOrganizationUrls []string  `json:"current_user_organization_urls,omitempty"`
	CurrentUserPublicURL        *string   `json:"current_user_public_url,omitempty"`
	CurrentUserURL              *string   `json:"current_user_url,omitempty"`
	SecurityAdvisoriesURL       *string   `json:"security_advisories_url,omitempty"`
	TimelineURL                 string    `json:"timeline_url"`
	UserURL                     string    `json:"user_url"`
}
