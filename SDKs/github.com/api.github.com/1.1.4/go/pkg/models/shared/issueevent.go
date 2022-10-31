package shared

import (
	"time"
)

type IssueEventSimpleUser struct {
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

type IssueEvent struct {
	Actor             IssueEventSimpleUser       `json:"actor"`
	Assignee          *IssueEventSimpleUser      `json:"assignee,omitempty"`
	Assigner          *IssueEventSimpleUser      `json:"assigner,omitempty"`
	AuthorAssociation *AuthorAssociationEnum     `json:"author_association,omitempty"`
	CommitID          string                     `json:"commit_id"`
	CommitURL         string                     `json:"commit_url"`
	CreatedAt         time.Time                  `json:"created_at"`
	DismissedReview   *IssueEventDismissedReview `json:"dismissed_review,omitempty"`
	Event             string                     `json:"event"`
	ID                int64                      `json:"id"`
	Issue             *IssueSimple               `json:"issue,omitempty"`
	Label             *IssueEventLabel           `json:"label,omitempty"`
	LockReason        *string                    `json:"lock_reason,omitempty"`
	Milestone         *IssueEventMilestone       `json:"milestone,omitempty"`
	NodeID            string                     `json:"node_id"`
	ProjectCard       *IssueEventProjectCard     `json:"project_card,omitempty"`
	Rename            *IssueEventRename          `json:"rename,omitempty"`
	RequestedReviewer *IssueEventSimpleUser      `json:"requested_reviewer,omitempty"`
	RequestedTeam     *Team                      `json:"requested_team,omitempty"`
	ReviewRequester   *IssueEventSimpleUser      `json:"review_requester,omitempty"`
	URL               string                     `json:"url"`
}
