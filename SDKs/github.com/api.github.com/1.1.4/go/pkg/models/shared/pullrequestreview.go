package shared

import (
	"time"
)

type PullRequestReviewLinksHTML struct {
	Href string `json:"href"`
}

type PullRequestReviewLinksPullRequest struct {
	Href string `json:"href"`
}

type PullRequestReviewLinks struct {
	HTML        PullRequestReviewLinksHTML        `json:"html"`
	PullRequest PullRequestReviewLinksPullRequest `json:"pull_request"`
}

type PullRequestReviewUserSimpleUser struct {
	AvatarURL         string  `json:"avatar_url"`
	EventsURL         string  `json:"events_url"`
	FollowersURL      string  `json:"followers_url"`
	FollowingURL      string  `json:"following_url"`
	GistsURL          string  `json:"gists_url"`
	GravatarID        string  `json:"gravatar_id"`
	HTMLURL           string  `json:"html_url"`
	ID                int64   `json:"id"`
	Login             string  `json:"login"`
	NodeID            string  `json:"node_id"`
	OrganizationsURL  string  `json:"organizations_url"`
	ReceivedEventsURL string  `json:"received_events_url"`
	ReposURL          string  `json:"repos_url"`
	SiteAdmin         bool    `json:"site_admin"`
	StarredAt         *string `json:"starred_at,omitempty"`
	StarredURL        string  `json:"starred_url"`
	SubscriptionsURL  string  `json:"subscriptions_url"`
	Type              string  `json:"type"`
	URL               string  `json:"url"`
}

type PullRequestReview struct {
	Links             PullRequestReviewLinks          `json:"_links"`
	AuthorAssociation AuthorAssociationEnum           `json:"author_association"`
	Body              string                          `json:"body"`
	BodyHTML          *string                         `json:"body_html,omitempty"`
	BodyText          *string                         `json:"body_text,omitempty"`
	CommitID          string                          `json:"commit_id"`
	HTMLURL           string                          `json:"html_url"`
	ID                int64                           `json:"id"`
	NodeID            string                          `json:"node_id"`
	PullRequestURL    string                          `json:"pull_request_url"`
	State             string                          `json:"state"`
	SubmittedAt       *time.Time                      `json:"submitted_at,omitempty"`
	User              PullRequestReviewUserSimpleUser `json:"user"`
}
