package shared

import (
	"time"
)

type ProjectColumn struct {
	CardsURL   string    `json:"cards_url"`
	CreatedAt  time.Time `json:"created_at"`
	ID         int64     `json:"id"`
	Name       string    `json:"name"`
	NodeID     string    `json:"node_id"`
	ProjectURL string    `json:"project_url"`
	UpdatedAt  time.Time `json:"updated_at"`
	URL        string    `json:"url"`
}
