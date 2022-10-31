package shared

import (
"time")

type EventPayloadPages struct {
    Action *string `json:"action,omitempty"`
    HTMLURL *string `json:"html_url,omitempty"`
    PageName *string `json:"page_name,omitempty"`
    Sha *string `json:"sha,omitempty"`
    Summary *string `json:"summary,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type EventPayload struct {
    Action *string `json:"action,omitempty"`
    Comment *IssueComment `json:"comment,omitempty"`
    Issue *IssueSimple `json:"issue,omitempty"`
    Pages []EventPayloadPages `json:"pages,omitempty"`
    
}

type EventRepo struct {
    ID int64 `json:"id"`
    Name string `json:"name"`
    URL string `json:"url"`
    
}

type Event struct {
    Actor Actor `json:"actor"`
    CreatedAt time.Time `json:"created_at"`
    ID string `json:"id"`
    Org *Actor `json:"org,omitempty"`
    Payload EventPayload `json:"payload"`
    Public bool `json:"public"`
    Repo EventRepo `json:"repo"`
    Type string `json:"type"`
    
}

