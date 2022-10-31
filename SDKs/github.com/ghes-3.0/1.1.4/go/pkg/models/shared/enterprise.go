package shared

import (
"time")

type Enterprise struct {
    AvatarURL string `json:"avatar_url"`
    CreatedAt time.Time `json:"created_at"`
    Description *string `json:"description,omitempty"`
    HTMLURL string `json:"html_url"`
    ID int64 `json:"id"`
    Name string `json:"name"`
    NodeID string `json:"node_id"`
    Slug string `json:"slug"`
    UpdatedAt time.Time `json:"updated_at"`
    WebsiteURL *string `json:"website_url,omitempty"`
    
}

