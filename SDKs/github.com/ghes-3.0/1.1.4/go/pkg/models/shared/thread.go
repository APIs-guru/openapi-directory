package shared

type ThreadSubject struct {
	LatestCommentURL string `json:"latest_comment_url"`
	Title            string `json:"title"`
	Type             string `json:"type"`
	URL              string `json:"url"`
}

type Thread struct {
	ID              string            `json:"id"`
	LastReadAt      string            `json:"last_read_at"`
	Reason          string            `json:"reason"`
	Repository      MinimalRepository `json:"repository"`
	Subject         ThreadSubject     `json:"subject"`
	SubscriptionURL string            `json:"subscription_url"`
	Unread          bool              `json:"unread"`
	UpdatedAt       string            `json:"updated_at"`
	URL             string            `json:"url"`
}
