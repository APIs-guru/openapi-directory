package shared

import (
	"time"
)

type EventPayloadPages struct {
	Action   *string `json:"action"`
	HTMLURL  *string `json:"html_url"`
	PageName *string `json:"page_name"`
	Sha      *string `json:"sha"`
	Summary  *string `json:"summary"`
	Title    *string `json:"title"`
}

type EventPayload struct {
	Action  string              `json:"action"`
	Comment *IssueComment       `json:"comment"`
	Issue   *IssueSimple        `json:"issue"`
	Pages   []EventPayloadPages `json:"pages"`
}

type EventRepo struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
	URL  string `json:"url"`
}

type Event struct {
	Actor     Actor        `json:"actor"`
	CreatedAt time.Time    `json:"created_at"`
	ID        string       `json:"id"`
	Org       *Actor       `json:"org"`
	Payload   EventPayload `json:"payload"`
	Public    bool         `json:"public"`
	Repo      EventRepo    `json:"repo"`
	Type      string       `json:"type"`
}
